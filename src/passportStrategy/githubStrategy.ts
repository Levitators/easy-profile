import express from "express";
import { PassportStatic } from "passport";
import { Strategy as GitHubStrategy } from "passport-github";
import * as oauth2 from "passport-oauth2";
import userData from "../models/userData";

const verifyFunction = async (accessToken: String, refreshToken: String, profile: GitHubStrategy.Profile, done: oauth2.VerifyCallback) => {
  try {
    const user = await userData.findOne({ email: profile.emails[0].value });
    if (user) {
      return done(undefined, user);
    }
    const createdUser = await userData.create(Object.assign({
      email: profile.emails[0].value,
      firstName: profile.displayName,
      slug: profile.username
    },
      profile.photos[0].value ? { avatarUrl: profile.photos[0].value } : undefined
    ));
    return done(undefined, createdUser);
  } catch (e) {
    throw e;
  }
};


export default (passport: PassportStatic, app: express.Application) => {
  passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK_URL
  }, verifyFunction));

  app.get("/auth/github",
    passport.authenticate("github"));

  app.get("/auth/github/callback",
    passport.authenticate("github", { failureRedirect: "/error" }),
    (req: express.Request, res: express.Response) => {
      res.redirect(`/${req.user.slug}`);
    });
};

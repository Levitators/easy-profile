import express from "express";
import passport from "passport";
import useGithubStrategy from "./githubStrategy";
import userData from "../models/userData";
import { IUserData } from "types";

export default (app: express.Application) => {
  app.use(passport.initialize());
  app.use(passport.session());

  useGithubStrategy(passport, app);

  passport.serializeUser((user: IUserData, done) => {
    done(undefined, user._id);
  });

  passport.deserializeUser((id, done) => {
    userData.findById(id, (err, user) => {
      if (!err) done(undefined, user);
      else done(err, undefined);
    });
  });
};

import express from "express";
import helmet from "helmet";
import mongoose from "mongoose";
import expressValidator from "express-validator";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github";

import React from "react";
import { renderToString } from "react-dom/server";
import html from "./client/Html";
import App from "./client/App";

dotenv.config({ path: ".env" });

const app = express();
const port = process.env.PORT || 3000;
app.set("port", port);
(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
  } catch (e) {
    throw (e);
  }
})();
app.use(helmet());
app.use(expressValidator());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get("/success", (req, res) => res.send("You have successfully logged in"));
app.get("/error", (req, res) => res.send("error logging in"));

passport.serializeUser(function (user, cb) {
  cb(undefined, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(undefined, obj);
});

app.use(express.static("dist"));

app.get("/", (req, res) => {
  const body = renderToString(React.createElement(App));

  res.send(
    html({
      body
    })
  );
});


// app.get("/", (req, res) => res.send("Hello World!"));

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.GITHUB_CALLBACK_URL
},
  (accessToken, refreshToken, profile, cb) => {
    console.log("Profile -> ", profile);
    return cb(undefined, profile);
  }
));

app.get("/auth/github",
  passport.authenticate("github"));

app.get("/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/error" }),
  function (req, res) {
    res.redirect("/success");
  });

export default app;

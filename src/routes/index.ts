import express from "express";
import isAuthenticated from "../middlewares/authMiddleware";
import testHandler from "./handlers/testHandler";

export default (app: express.Application) => {
  app.get("/api/auth-test", isAuthenticated, testHandler);
};

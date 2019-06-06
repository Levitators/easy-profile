import { Document } from "mongoose";
import express from "express";

export interface IUserData extends Document {
  email?: string;
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
}

export interface IGraphQLContext {
  userData: IUserData;
  request: express.Request;
}

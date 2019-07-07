import { Document, Model } from "mongoose";
import express from "express";

export interface IUserData extends Document {
  email?: string;
  slug?: string;
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
}

export interface IGraphQLContext {
  userData: Model<IUserData, {}>;
  request: express.Request;
}

export interface IGetUserDataArgs {
  slug: string;
}

export interface IUpdateUserDataArgs {
  updatedUserData: IUserData;
}

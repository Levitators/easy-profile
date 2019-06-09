import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";
import root from "./resolvers";
import userData from "../models/userData";

export default (app: express.Application) => {
  app.use("/graphql", graphqlHTTP(
    async (request: express.Request) => ({
      schema: schema,
      rootValue: root,
      context: { userData, request },
      graphiql: true,
    })
  ));
};

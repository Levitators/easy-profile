import { GraphQLObjectType } from "graphql";
import { IGraphQLContext } from "types";

export default (obj: GraphQLObjectType, ctx: IGraphQLContext) => {
  if (ctx.request.isAuthenticated()) {
    return "Hello world";
  }
  return "Not logged in";
};

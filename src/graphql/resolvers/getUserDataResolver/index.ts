import { IGraphQLContext, IGetUserDataArgs, IUserData } from "types";

export default async (args: IGetUserDataArgs, ctx: IGraphQLContext): Promise<IUserData> => {
  try {
    const foundUser = await ctx.userData.findOne({ slug: args.slug });
    if (foundUser) {
      return foundUser;
    }
    throw new Error("User not found");
  } catch (e) {
    throw e;
  }
};

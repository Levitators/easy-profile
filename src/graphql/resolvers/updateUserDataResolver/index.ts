import { IGraphQLContext, IUpdateUserDataArgs, IUserData } from "types";

export default async (args: IUpdateUserDataArgs, ctx: IGraphQLContext): Promise<IUserData> => {
  if (!ctx.request.isAuthenticated()) {
    throw new Error("Not authenticated");
  }
  try {
    const {
      email,
      slug,
      firstName,
      lastName,
      avatarUrl
    } = args.updatedUserData;
    const updatedUser = await ctx.userData.findOneAndUpdate({ slug: slug }, Object.assign({},
      email ? { email } : undefined,
      firstName ? { firstName } : undefined,
      lastName ? { lastName } : undefined,
      avatarUrl ? { avatarUrl } : undefined
    ), { upsert: true });
    if (updatedUser) {
      return updatedUser;
    }
    throw new Error("User not found");
  } catch (e) {
    throw e;
  }
};

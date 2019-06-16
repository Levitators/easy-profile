import { buildSchema } from "graphql";

export default buildSchema(`

  type userData {
    email: String!
    firstName: String!
    slug: String!
    lastName: String
    avatarUrl: String
  }

  input userDataInput {
    email: String
    firstName: String
    slug: String!
    lastName: String
    avatarUrl: String
  }

  type Query {
    getUserData(slug: String!): userData
  }

  type Mutation {
    updateUserData(updatedUserData: userDataInput): userData
  }
`);

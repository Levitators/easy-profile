import { gql } from "apollo-boost";

export default gql`
  query GET_USER_DATA($slug: String!) {
    getUserData(slug: $slug) {
        slug
        email
        firstName
        lastName
        avatarUrl
    }
  }
`;

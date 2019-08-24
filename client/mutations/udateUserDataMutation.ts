import gql from "graphql-tag";

export default gql`
  mutation updateUserData($updatedUserData: userDataInput) {
    updateUserData(updatedUserData: $updatedUserData) {
        slug
        email
        firstName
        lastName
        avatarUrl
    }
  }
`;

import React, { Fragment } from "react";
import gql from "graphql-tag";
import { Mutation, ApolloConsumer } from "react-apollo";
import EditForm from "./components/FormFeilds/FormFeilds";
import GET_USER_QUERY from "../../queries/getUserQuery";
import UPDATE_USER_DATA from "../../mutations/udateUserDataMutation";
import { IUserData } from "../../types";

interface Data {
  updateUserData: IUserData;
}

interface Variables {
  updatedUserData: IUserData;
}

const AddTodo = (props) => {

  const pushBack = () => {
    props.history.push(`/${props.match.params.userSlug}`);
  };

  return (
    <Fragment>
      <ApolloConsumer>
        {client => {
          const { getUserData: userdata } = client.readQuery({
            query: gql`
              query GET_USER_DATA($slug: String!) {
                getUserData(slug: $slug) {
                    slug
                    email
                    firstName
                    lastName
                    avatarUrl
                }
              }
            `,
            variables: {
              slug: props.match.params.userSlug,
            },
          });
          return (
            <Mutation<Data, Variables>
              mutation={UPDATE_USER_DATA}
              update={(cache, data) => {
                console.log("After update", data);
                cache.writeQuery({
                  query: GET_USER_QUERY,
                  variables: props.match.params.userSlug,
                  data: { getUserData: { ...userdata, lastName: "Doc" } },
                });
              }}
            >
              {(updateUserData, { data }) => (
                <div>
                  <h1>Edit the form feilds and press save</h1>
                  <EditForm userdata={userdata} updateUserData={updateUserData} pushBack={pushBack} />
                </div>
              )}
            </Mutation>
          );
        }}
      </ApolloConsumer>
    </Fragment >
  );
};

export default AddTodo;

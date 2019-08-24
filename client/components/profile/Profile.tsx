import React, { Fragment, useState } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import CircularProgress from "@material-ui/core/CircularProgress";
import GET_USER_QUERY from "../../queries/getUserQuery";

export interface IUserData {
  email?: string;
  slug?: string;
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
}

interface Data {
  getUserData: IUserData;
}

interface Variables {
  slug: string;
}

const App = (props) => {
  const [isEditable, setIsEditable] = useState(false);
  return (<Query <Data, Variables> query={GET_USER_QUERY} fetchPolicy="network-only" variables={{ slug: props.match.params.userSlug }}>
    {({ loading, error, data }) => {
      if (loading) return <CircularProgress />;
      if (error) return <div>Error :(</div>;
      const userData = data.getUserData;
      return (
        <Fragment>
          {!isEditable && <span>Welcome {userData.firstName} - {userData.lastName}</span>}
          <button onClick={() => props.history.push(`${props.match.params.userSlug}/edit`)}>{isEditable ? "Default View" : "Edit"}</button>
          {/* {isEditable && <EditProfile userData={userData} />} */}
        </Fragment>
      );
    }}
  </Query >
  );
};

export default App;

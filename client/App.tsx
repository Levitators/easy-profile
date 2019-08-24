import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Redirect from "./components/Redirect/Redirect";
import Home from "./components/home/Home";
import Test from "./components/test/Test";
import Profile from "./components/profile/Profile";
import EditProfile from "./components/editProfile/EditProfile";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/login" component={Home} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/:userSlug" component={Profile} />
          <Route exact path="/:userSlug/edit" component={EditProfile} />
          <Route exact path="/" component={Redirect} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

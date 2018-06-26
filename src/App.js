import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main';
import Login from './Login';
import Error from './Error';


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/profile" component={Main} />
      <Route path="/*" component={Error} />
    </Switch>
  </main>
);

export default App;

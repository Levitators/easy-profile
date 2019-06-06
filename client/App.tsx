import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Test from "./components/test/Test";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/test" component={Test} />
      </div>
    </Router>
  );
};

export default App;

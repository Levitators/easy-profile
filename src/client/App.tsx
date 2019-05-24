import React from "react";

export default () => {
  const clickHandler = () => {
    location.replace("http://localhost:3000/auth/github");
  };

  return (
    <React.Fragment>
      <div>React SSR</div>
      <button onClick={clickHandler}>Login</button>
    </React.Fragment>
  );
};

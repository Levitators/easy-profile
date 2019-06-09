import React from "react";

const Home: React.FC = () => {
  const handleClick = () => {
    window.location.assign("http://127.0.0.1:3000/auth/github");
  };
  return (
    <button onClick={handleClick}> Github </button>
  );
};

export default Home;

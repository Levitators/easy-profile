import React, { useEffect } from "react";

const Home: React.FC = () => {
  useEffect(() => {
    fetch("api/auth-test", { credentials: "include" }).then(res => res.text().then((a) => console.log(a)));
  });
  return (
    <button> Login worked </button>
  );
};

export default Home;

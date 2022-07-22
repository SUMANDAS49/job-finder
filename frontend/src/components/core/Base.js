import React from "react";
import Nav from "./Nav.js";
const Base = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default Base;

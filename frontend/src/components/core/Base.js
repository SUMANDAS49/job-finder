import React from "react";
import { userProfileContextProvider } from "../Contexts/UserProfileContext.js";
import Nav from "./Nav.js";
const Base = ({ children }) => {
  return (
    <userProfileContextProvider>
      <div>
        <Nav />
        {children}
      </div>
    </userProfileContextProvider>
  );
};

export default Base;

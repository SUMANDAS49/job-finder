import React from "react";
import { PostContext } from "../Contexts/PostContext.js";
import { userProfileContextProvider } from "../Contexts/UserProfileContext.js";
import Nav from "./Nav.js";
const Base = ({ children }) => {
  return (
    <PostContext>
    <userProfileContextProvider>
     
      <div>
        <Nav />
        {children}
      </div>
      
    </userProfileContextProvider>
    </PostContext>
  );
};

export default Base;

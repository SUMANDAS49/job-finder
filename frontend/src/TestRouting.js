import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignUpForm from "./components/userComponent/Auth/SignUpForm";
import PublicRoute from "./utils/PublicRoute";
import LoginForm from "./components/userComponent/Auth/LoginForm";
import Home from "./components/core/Home";
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="" element={<Home />} />
          <Route path="signup" element={<SignUpForm />} />
          <Route path="login" element={<LoginForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;

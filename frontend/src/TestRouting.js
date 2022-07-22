import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Base from "./components/core/Base";
import Nav from "./components/core/Nav";
import SignUpForm from "./components/userComponent/Auth/SignUpForm";
import PublicRoute from "./utils/PublicRoute";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="" element={<App />} />
          <Route path="base" element={<Base />} />
          <Route path="Nav" element={<Nav />} />
          <Route path="signup" element={<SignUpForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Base from "./components/core/Base";
import Nav from "./components/core/Nav";
import Job from "./components/jobComponents/jobUtil/Job";
import Jobs from "./components/jobComponents/jobUtil/Jobs";
import JobCard from "./components/jobComponents/jobUtil/JobCard";
import UpdateJobForm from "./components/jobComponents/jobCreator/UpdateJobForm";
import UserProfile from "./components/userComponent/Auth/UserProfile";
import SignUpForm from "./components/userComponent/Auth/SignUpForm";
import PublicRoute from "./utils/PublicRoute";
import PrivateRoute from "./utils/PrivateRoute";
import Home from "./components/core/Home";
import LoginForm from "./components/userComponent/Auth/LoginForm";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute redirectTo={"/login"}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute redirectTo={"/"}>
              <SignUpForm />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo={"/"}>
              <LoginForm />
            </PublicRoute>
          }
        />
        <Route path="/job" element={<Job />} />
        <Route path="/allJobs" element={<Jobs />} />
        <Route path="/oneJob" element={<JobCard />} />
        <Route path="/updateJob" element={<UpdateJobForm />} />
        <Route path="/myProfile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;

import { API } from "../../../Backend";

// we have all API calls as well as auth util functions
export const signUpApiCall = (userData) => {
  return fetch(`${API}/auth/signup`, {
    method: "post",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      name: userData.name,
      email: userData.email,
      password: userData.password,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

//auth util functions

export const isAuthenticated = () => {
  if (window.localStorage !== undefined) {
    if (localStorage.getItem("isAuthenticated") != undefined)
      return JSON.parse(localStorage.getItem("isAuthenticated"));
    return false;
  }
  return false;
};

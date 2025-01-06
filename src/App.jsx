import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Auth/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Admin from "./components/Dashboard/Admin";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [userRole, setUserRole] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const logUser = localStorage.getItem("loggedInUser");
    if (logUser) {
      const userData = JSON.parse(logUser);
     setUserRole(userData.role);
     setLoggedInUser(userData.data)
    }
  },[]);

  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      setUserRole("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const user = authData.users.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        setUserRole("user");
        setLoggedInUser(user);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "user", data:user }));
      } else {
        alert("Invalid credentials");
      }
    }
  };

  return (
    <>
      {!userRole ? (
        <Login handleLogin={handleLogin} />
      ) : userRole === "admin" ? (
        <Admin />
      ) : (
        <Dashboard data={loggedInUser} />
      )}
    </>
  );
};

export default App;

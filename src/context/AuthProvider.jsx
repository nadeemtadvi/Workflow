import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({ users: [], admins: [] });

  useEffect(() => {
    if (!localStorage.getItem("users") || !localStorage.getItem("admins")) {
      setLocalStorage();
    }
    const { users } = getLocalStorage();
    setUserData({ users });
  }, []);

  // const data = getLocalStorage()
  // console.log('getLocalStorage',data);
  // console.log('userData',userData);

  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData]}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;

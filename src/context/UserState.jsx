import React, { useState, useEffect } from "react";
import UserContext from "./Context";

const UserState = ({ children }) => {
  const [user, setUser] = useState({
    name: "Irfan",
    token: 123,
    logedIn: false,
  });

  const update = (token) => {
    setUser({ user: "Irfan", token: token, logedIn: true });
    console.log(user);
  };

  return (
    <>
      <UserContext.Provider value={{ user, update }}>
        {children}
      </UserContext.Provider>
    </>
  );
};

export default UserState;

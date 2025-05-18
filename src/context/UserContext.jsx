import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(() => {
    // initial read from localStorage
    const saved = localStorage.getItem("kris-user");
    return saved ? JSON.parse(saved) : null;
  });

  // whenever user changes, sync to localStorage
  useEffect(() => {
    if (user) localStorage.setItem("kris-user", JSON.stringify(user));
    else localStorage.removeItem("kris-user");
  }, [user]);

  const logOut = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, setUser, logOut }}>
      {children}
    </UserContext.Provider>
  );
}

import { createContext, useContext, useState, useEffect } from "react";

const ContextApi = createContext();

export const ContextProvider = ({ children }) => {
  // ✅ DO NOT JSON.parse
  const [token, setToken] = useState(() =>
    localStorage.getItem("JWT_TOKEN")
  );

  // ✅ Keep localStorage synced
  useEffect(() => {
    if (token) {
      localStorage.setItem("JWT_TOKEN", token);
    } else {
      localStorage.removeItem("JWT_TOKEN");
    }
  }, [token]);

  return (
    <ContextApi.Provider value={{ token, setToken }}>
      {children}
    </ContextApi.Provider>
  );
};

export const useStoreContext = () => {
  return useContext(ContextApi);
};

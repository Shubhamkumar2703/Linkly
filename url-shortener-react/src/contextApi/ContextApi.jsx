import React, { createContext, useContext, useState } from 'react';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    return localStorage.getItem('JWT_TOKEN') || null;
  });

  const handleSetToken = (newToken) => {
    setToken(newToken);
    if (newToken) {
      localStorage.setItem('JWT_TOKEN', newToken);
    } else {
      localStorage.removeItem('JWT_TOKEN');
    }
  };

  return (
    <StoreContext.Provider value={{ token, setToken: handleSetToken }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStoreContext must be used within StoreProvider');
  }
  return context;
};

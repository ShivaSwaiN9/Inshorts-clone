import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useSearch = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const updateSearchQuery = (query) => {
    setSearchQuery(query);
  };

  return (
    <AppContext.Provider value={{ searchQuery, updateSearchQuery }}>
      {children}
    </AppContext.Provider>
  );
};

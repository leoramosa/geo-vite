// AppContext.tsx
import React, { createContext, useContext, ReactNode } from "react";
import initialState from "./initialState";
import { InitialState } from "../types";

const AppContext = createContext<InitialState | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <AppContext.Provider value={initialState}>{children}</AppContext.Provider>
  );
};

export const useAppContext = (): InitialState => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export default AppContext;

"use client"
// AppContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppDataType {
  mainTitle ?: string;
  activeTitle?: string;
  [key:string]:any;
}

// Define the context type
interface AppContextType {
  value: AppDataType ;
  setValue: (newValue: AppDataType ) => void;
}

// Create the context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create a provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [value, setValue] = useState<object>({});

  return (
    <AppContext.Provider value={{ value, setValue }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

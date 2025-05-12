"use client";

import React, { createContext, ReactNode, useState } from "react";

interface ThemeContextInterface {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextInterface | undefined>(
  undefined
);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    if (isDark) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
    setIsDark((prev) => !prev);
    console.log("isDark mode on", isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

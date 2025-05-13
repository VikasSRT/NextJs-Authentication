"use client";

import React, { createContext, ReactNode, useEffect, useState } from "react";

interface ThemeContextInterface {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextInterface | undefined>(
  undefined
);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("isDark");
    console.log("storedTheme", storedTheme)
    if (storedTheme) {
      setIsDark(JSON.parse(storedTheme));
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    if (typeof window !== undefined) {
      localStorage.setItem("isDark", JSON.stringify(isDark));
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

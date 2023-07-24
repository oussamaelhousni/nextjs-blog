"use client";
import { createContext, useState } from "react";

export const themeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");
  const toggleMode = () =>
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  return (
    <themeContext.Provider value={{ toggleMode, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </themeContext.Provider>
  );
};

"use client";
import React from "react";
import styles from "./toggle.module.css";
import { useContext } from "react";
import { themeContext } from "@/context/ThemeContext";
const DarkModeTogller = () => {
  const { mode, toggleMode } = useContext(themeContext);
  return (
    <div className={styles.toggler} onClick={() => toggleMode()}>
      <div
        className={styles.ball}
        style={mode === "dark" ? { left: ".3rem" } : { right: ".3rem" }}
      ></div>
      <div className={styles.icon}>&#9728;</div>
      <div className={styles.icon}>&#9789;</div>
    </div>
  );
};

export default DarkModeTogller;

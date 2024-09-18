"use client";
import { useState, useEffect } from "react";
const DarkMode = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() =>
    JSON.parse(localStorage.getItem("darkMode") || "false")
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    applyTheme(darkMode);
  }, [darkMode]);

  useEffect(() => {
    applyTheme(darkMode);
  }, [darkMode]); // Apply dark mode on initial render

  const applyTheme = (isDarkMode: boolean) => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
  };

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <button className="" onClick={toggleDarkMode}>
      {darkMode ? "Sun" : "Moon"}
    </button>
  );
};

export default DarkMode;

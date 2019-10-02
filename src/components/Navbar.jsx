import React, { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const valueFromLocalStorage = localStorage.getItem(key);
    if (valueFromLocalStorage) {
      return JSON.parse(valueFromLocalStorage);
    } else {
      return initialValue;
    }
  });

  const setValue = value => {
    localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
  }

  return [storedValue, setValue];
};

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;

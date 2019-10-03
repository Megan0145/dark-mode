import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (key, initialValue) => {
  const [dark, setDark] = useLocalStorage(key, initialValue);

  useEffect(() => {
    return dark
      ? document.querySelector("body").classList.add("dark-mode")
      : document.querySelector("body").classList.remove("dark-mode");
  }, [dark]);
  return [dark, setDark];
};

export default useDarkMode;

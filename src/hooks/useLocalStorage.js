import React, { useState } from 'react';

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

export default useLocalStorage;
import React, { useState } from 'react'


export const darkMode = initialValue => {
  const [darkMode, setDarkMode] = useState(initialValue);
  const handleChanges = updatedValue => {
    setDarkMode(updatedValue);
  };
  return [darkMode, setDarkMode, handleChanges]
}

import { createContext } from "react";



/* export const ThemeContext = createContext(); */

export const themes = {
    light: 'light',
    dark: 'dark',
  };
  
  export const ThemeContext = createContext({
    theme: themes.light,
    toggleTheme: () => {},
  });

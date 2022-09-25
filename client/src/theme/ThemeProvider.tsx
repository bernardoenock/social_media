import React, { useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { darkTheme } from "./Themes/DarkTheme";
import { lightTheme } from "./Themes/LightTheme";

interface IValues {
  handleTheme: () => void;
  mode: string;
}

export const ThemeContext = React.createContext({} as IValues);

const StyledThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState(
    localStorage.getItem("@LinkLei:Theme.mode") || "light"
  );

  const handleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);

    localStorage.setItem("@LinkLei:Theme.mode", newMode);
  };

  const colors: DefaultTheme = mode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={colors}>
      <ThemeContext.Provider
        value={{
          handleTheme,
          mode,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};
export default StyledThemeProvider;

import React from "react";
import { lightTheme, darkTheme } from "../components/ToggleDarkMode/theme";
import Toggle from "../components/ToggleDarkMode/Toggle";
import { GlobalStyles } from "../components/ToggleDarkMode/global";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../components/ToggleDarkMode/useDarkMode";

// The function that toggles between themes
function ToggleDark() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }
  // Return the layout based on the current theme
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        {/* Pass the toggle functionality to the button */}
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </>
    </ThemeProvider>
  );
}

export default ToggleDark;

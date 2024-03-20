import { useEffect, useState } from "react";
import "./App.css";
import { ThemeContextProvider } from "./Context/Theme";
import Themebtn from "./components/Themebtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // actual change in theme

  useEffect(() => {
    document.querySelector("html").classNameList.remove("light", "dark");
    document.querySelector("html").classNameList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeContextProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div classNameName="flex flex-wrap min-h-screen items-center">
        <div classNameName="w-full">
          <div classNameName="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Themebtn />
          </div>

          <div classNameName="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;

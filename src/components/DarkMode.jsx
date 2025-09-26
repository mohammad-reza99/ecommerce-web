import { useEffect, useState } from "react";
import LightButton from "../assets/light-mode-button.png";
import DarkButton from "../assets/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(false);
  const element = document.documentElement;

  useEffect(() => {
    element.classList.toggle("dark");
  }, [theme]);

  return (
    <img
      src={theme ? DarkButton : LightButton}
      alt={`${theme ? "Dark" : "Light"} Mode`}
      title={`${theme ? "Dark" : "Light"} Mode`}
      onClick={() => setTheme(!theme)}
      className="w-16 cursor-pointer"
    />
  );
};

export default DarkMode;

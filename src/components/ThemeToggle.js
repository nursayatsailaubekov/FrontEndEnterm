import { useTheme } from "../context/ThemeContext";
import '../App.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme} className="theme-btn">
        Switch to {theme === "light" ? "Dark" : "Light"}
      </button>

    </div>
  );
}
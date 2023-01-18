import { useContext } from "react";
import ToggleSwitch from "../toggleSwitch";
import { ThemeContext } from "../../theme/ThemeProvider";
import { NavLink } from "react-router-dom";
import styles from "./navigation.module.css";

function Navigation() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.darkMode;
  console.log(darkMode);
  return (
    <header>
       <nav className={styles.navigation}>
        <ul className={styles["nav-item"]}>
          <li className={styles["nav-link-item"]}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={styles["nav-link-item"]}>
            <NavLink to="/about">About</NavLink>
          </li>
          <li className={styles["nav-link-item"]}>
            <NavLink to="/projects">Projects</NavLink>
          </li>
        </ul>
      </nav>
      <ToggleSwitch
        isOn={darkMode}
        handleToggle={() => theme.setDarkMode(!darkMode)}
        leftAriaLabel="toggle dark mode"
        leftEmoji={<>&#127769;</>}
        rightAriaLabel="toggle light mode"
        rightEmoji={<>&#127774;</>}
      />
    </header>
  );
}

export default Navigation;
"use client";
import { useDispatch, useSelector } from "react-redux";
import { getThemeMode, toggleTheme } from "../../redux/slice";
import styles from "./ThemeToggle.module.scss";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const activeMode = useSelector(getThemeMode);
  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={styles.switchContainer}>
      <input
        type="checkbox"
        id="switch"
        checked={activeMode === 'dark' ?? true }
        onChange={handleToggle}
        className={styles.checkbox}
      />
      <label htmlFor="switch" className={styles.label}>
        <span className={styles.switch}></span>
      </label>
    </div>
  );
};

export default ThemeToggle;

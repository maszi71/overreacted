"use client";
import styles from "./Header.module.scss";
import { montserrat } from "../../font";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useHeader } from "./Header.hook";

const Header = () => {
  const { pathname, logoStyle } = useHeader();

  return (
    <div className={styles.container}>
      <Link
        className={[montserrat.className, , styles.link].join(" ")}
        href="/"
        style={pathname !== "/" ? logoStyle : {}}
      >
        overreacted
      </Link>
      <ThemeToggle />
    </div>
  );
};

export default Header;

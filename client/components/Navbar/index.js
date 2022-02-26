import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a> Navbar</a>
      </Link>
    </nav>
  );
}

export default Navbar;

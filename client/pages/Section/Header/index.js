import React from "react";
import Image from "next/image";
import Navbar from "../../../components/Navbar";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <Navbar />
      <Image
        src="/img/georgia-z-JG5lgvc57qE-unsplashV2.jpg"
        alt="main picture"
        layout="fill"
        className={styles.picture}
      />
    </header>
  );
};

export default Header;

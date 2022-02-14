import React from "react";
import CategorieList from "./CategorieList";
import Items from "./Items";
import styles from "./styles.module.css";

const Menus = () => {
  return (
    <section>
      <h2 className={styles.title}>Menus</h2>
      <CategorieList />
      <Items />
    </section>
  );
};

export default Menus;

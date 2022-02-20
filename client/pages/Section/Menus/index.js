import React from "react";
import CategorieList from "./CategorieList";
import Items from "./Items";
import styles from "./styles.module.css";

const Menus = () => {
  return (
    <section>
      <h2 className={styles.title}>Menus</h2>
      <CategorieList />
      <div className={styles.row}>
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
      </div>
    </section>
  );
};

export default Menus;

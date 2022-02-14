import React from "react";
import styles from "./styles.module.css";
const categorie = ["Pizza", "Burger", "Wrap", "Boisson", "Dessert"];

const CategorieList = () => {
  return (
    <div>
      <ul className={styles.categorieListName}>
        {categorie.map((cat, index) => (
          <li key={index} className={styles.categorieName}>
            <p>{cat}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorieList;

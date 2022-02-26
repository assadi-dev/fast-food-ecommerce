import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { Commander } from "../../../components/Styled/Button";

function Items() {
  return (
    <div className={styles.card}>
      <Image
        src="/img/pizza/pizza_default.PNG"
        alt="pizza first"
        width={200}
        height={200}
        className={styles.cardImage}
      />
      <div className={styles.cardDetails}>
        <select name="size" id="size">
          <option>Petite</option>
          <option>Moyen</option>
          <option>Grande</option>
        </select>
        <select name="sauce" id="sauce">
          <option>Ketchup</option>
          <option>Mayonnaise</option>
          <option>Algerienne</option>
          <option>Samourai</option>
          <option>Blanche</option>
        </select>
      </div>
      <div>
        <Commander>Commander</Commander>
      </div>
    </div>
  );
}

export default Items;

import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

function Items() {
  return (
    <div className={styles.card}>
      <Image
        src="/img/pizza/unsplash_MQUqbmszGGM.jpg"
        alt="pizza first"
        width={320}
        height={340}
        className={styles.cardImage}
      />
      <div className={styles.cardDetails}>
        <p>item</p>
      </div>
    </div>
  );
}

export default Items;

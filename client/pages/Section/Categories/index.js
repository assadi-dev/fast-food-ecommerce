import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

const categorie = [
  { name: "Pizza", preview: "" },
  { name: "Burger", preview: "" },
  { name: "Wrap", preview: "" },
  { name: "Boisson", preview: "" },
  { name: "Dessert", preview: "" },
];

function Categories() {
  return (
    <section>
      <h2 className={styles.title}>Categories</h2>
      <div className={styles.row}>
        <div className={styles.cardLeft}>
          <Image
            src="/img/categories/alan-hardman-SU1LFoeEUkk-unsplash.jpg"
            alt="pizza categorie picture"
            width={520}
            height={280}
            layout="responsive"
            className={styles.cardImage}
          />
          <div className={styles.cardDetails}>
            <p className={styles.detailTitle}>Pizza</p>
            <button>ENTRER</button>
          </div>
        </div>
        <div className={styles.cardRight}>
          <Image
            src="/img/categories/leo-roza-P_z_xlMGuEk-unsplash.jpg"
            alt="entrée categorie picture"
            width={520}
            height={280}
            layout="responsive"
            className={styles.cardImage}
          />
          <div className={styles.cardDetails}>
            <p className={styles.detailTitle}>Entrée</p>
            <button>ENTRER</button>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.cardLeft}>
          <Image
            src="/img/categories/sk-uVPV_nV17Tw-unsplash.jpg"
            alt="burger categorie picture"
            width={520}
            height={280}
            layout="responsive"
            className={styles.cardImage}
          />
          <div className={styles.cardDetails}>
            <p className={styles.detailTitle}>Burger</p>
            <button>ENTRER</button>
          </div>
        </div>
        <div className={styles.cardRight}>
          <Image
            src="/img/categories/frank-alarcon-Oya1Kx9311k-unsplash.jpg"
            alt="tacos categorie picture"
            width={520}
            height={280}
            layout="responsive"
            className={styles.cardImage}
          />
          <div className={styles.cardDetails}>
            <p className={styles.detailTitle}>Wrap</p>
            <button>ENTRER</button>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.cardLeft}>
          <Image
            src="/img/categories/nikhil-_HWvaZjsTbc-unsplash.jpg"
            alt="boisson categorie picture"
            width={520}
            height={280}
            layout="responsive"
            className={styles.cardImage}
          />
          <div className={styles.cardDetails}>
            <p className={styles.detailTitle}>Boisson</p>
            <button>ENTRER</button>
          </div>
        </div>
        <div className={styles.cardRight}>
          <Image
            src="/img/categories/aneta-voborilova-RQYAbzjCK6k-unsplash.jpg"
            alt="dessert categorie picture"
            width={520}
            height={280}
            layout="responsive"
            className={styles.cardImage}
          />
          <div className={styles.cardDetails}>
            <p className={styles.detailTitle}>Dessert</p>
            <button>ENTRER</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;

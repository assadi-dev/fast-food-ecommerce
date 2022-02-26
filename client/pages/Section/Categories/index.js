import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

const categories = [
  {
    name: "Pizza",
    preview: "/img/categories/alan-hardman-SU1LFoeEUkk-unsplash.jpg",
    alt: "pizza categorie picture",
    slug: "pizza",
  },
  {
    name: "Entrée",
    preview: "/img/categories/leo-roza-P_z_xlMGuEk-unsplash.jpg",
    alt: "entrée categorie picture",
    slug: "entree",
  },
  {
    name: "Burger",
    preview: "/img/categories/sk-uVPV_nV17Tw-unsplash.jpg",
    alt: "burger categorie picture",
    slug: "burger",
  },
  {
    name: "Wrap",
    preview: "/img/categories/frank-alarcon-Oya1Kx9311k-unsplash.jpg",
    alt: "wrap categorie picture",
    slug: "wrap",
  },
  {
    name: "Boisson",
    preview: "/img/categories/nikhil-_HWvaZjsTbc-unsplash.jpg",
    alt: "boisson categorie picture",
    slug: "boisson",
  },
  {
    name: "Dessert",
    preview: "/img/categories/aneta-voborilova-RQYAbzjCK6k-unsplash.jpg",
    alt: "dessert categorie picture",
    slug: "dessert",
  },
];

const CardCategorie = ({ name, img, alt, slug }) => {
  return (
    <div className={styles.card}>
      <Link href={`/categorie/${slug}`}>
        <a>
          <Image
            src={img}
            alt={alt}
            width={1920}
            height={1080}
            layout="responsive"
            className={styles.cardImage}
          />
          <div className={styles.cardDetails}>
            <p className={styles.detailTitle}>{name}</p>
            <button>ENTRER</button>
          </div>
        </a>
      </Link>
    </div>
  );
};

function Categories() {
  return (
    <section>
      <h2 className={styles.title}>Categories</h2>
      <div className={styles.row}>
        {categories.map((categorie, index) => (
          <CardCategorie
            key={index}
            name={categorie.name}
            img={categorie.preview}
            slug={categorie.slug}
          />
        ))}
      </div>
    </section>
  );
}

export default Categories;

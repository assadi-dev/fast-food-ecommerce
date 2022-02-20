import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faHat } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";

import React from "react";
import styles from "./styles.module.css";

const Card = styled.div`
  width: 100%;
  margin: 0.75rem;
  padding: 1rem;
`;

const services = [
  {
    title: "Sur place ou emporté",
    alt: "Sur place ou emporté image",
    text: "Récuperez votre commande ou nous l’apportons à votre domicile.",
    path: "/img/icons/store.png",
  },
  {
    title: "Ingredient varié",
    alt: "Ingredient varié image",
    text: "Explorer nos differentes variete de recettes,dessert,boissons,entrees...",
    path: "/img/icons/tray.png",
  },
  {
    title: "Livraison rapide",
    alt: "Livraison rapid image",
    text: "Livraison instantanée jusqu’a chez-vous",
    path: "/img/icons/fast-delivery.png",
  },
  {
    title: "Chef Experimenté",
    alt: "Chef Experimente image",
    text: "Nos Equipes sont contitues de chefs et cuisiniers talentueux",
    path: "/img/icons/chef.png",
  },
];

const ServiceItems = ({ item }) => {
  const { title, path, text, alt } = item;
  return (
    <Card>
      <figure className={styles.picture}>
        <Image
          src={path}
          alt={alt}
          width="100"
          height="100"
          layout="responsive"
        />
        <figcaption></figcaption>
      </figure>
      <h3 className={styles.itemTitle}>{title}</h3>
      <p>{text}</p>
    </Card>
  );
};

function Services() {
  library.add(far, fas);
  return (
    <section>
      <h2 className={styles.title}>Commande en ligne</h2>
      <div className={styles.row}>
        {services.map((service, index) => (
          <ServiceItems key={index} item={service} />
        ))}
      </div>
    </section>
  );
}

export default Services;

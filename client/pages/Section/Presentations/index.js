import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

function Presentation() {
  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <Image
          src="/img/unsplash_MqT0asuoIcU.jpg"
          alt="vegetarian picture"
          width={480}
          height={340}
          layout="responsive"
        />
      </div>
      <div className={styles.card}>
        <Image
          src="/img/unsplash_cI74Hs3gOpo.jpg"
          alt="vegetarian picture"
          width={480}
          height={340}
          layout="responsive"
        />
      </div>
      <div className={styles.card}>
        <Image
          src="/img/unsplash_90HdOlGbjck.jpg"
          alt="dessert picture"
          width={480}
          height={340}
          layout="responsive"
        />
      </div>
    </section>
  );
}

export default Presentation;

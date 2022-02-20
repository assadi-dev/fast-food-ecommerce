import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faHat } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import React from "react";
import styles from "./styles.module.css";

function Services() {
  library.add(far, fas);
  return (
    <section>
      <h2 className={styles.title}>Commande en ligne</h2>
      <div className={styles.row}>
        <div>sur place ou emporté</div>
        <div>sur place ou emporté</div>
        <div>sur place ou emporté</div>
        <div>
          <p>
            <FontAwesomeIcon icon={["far", "hat-cowboy"]} size="2x" />
            <FontAwesomeIcon icon={["far", "chevron-up"]} size="2x" />
          </p>
          sur place ou emporté
        </div>
      </div>
    </section>
  );
}

export default Services;

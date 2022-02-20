import React from "react";
import styles from "./styles.module.css";
import styled from "styled-components";

const Button = styled.a`
  border-radius: 10px;
  padding: 10px 20px;
  background-color: red;
  margin-top: 1rem;
`;

function Announcement() {
  return (
    <section className={styles.announcementContainer}>
      <p className={styles.titleAnnoucement}>Friendly Pizza</p>
      <div className={styles.detailAnnoucement}>
        <h2>-50% sur la 2eme Pizza</h2>
        <Button href="#">Commander</Button>
      </div>
    </section>
  );
}

export default Announcement;

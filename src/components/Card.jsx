import React from "react";
import styles from "./Card.module.css";

function Card(props) {
  const { id, description, img, selectCB } = props;
  return (
    <div className={styles.card}>
      <h3>Card: {id}</h3>
      <p>{description}</p>
      <div className={styles.btnContainer}>
        <img src={img} className={styles.logo} alt="logo" />
        <button className={styles.btn} onClick={(_) => selectCB(id)}>
          select
        </button>
      </div>
    </div>
  );
}

export default Card;

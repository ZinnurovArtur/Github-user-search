import React from "react";
import Image from "next/image";
import styles from "../styles/card.module.scss";
const Card = () => {
  return (
    <div className={styles.card_container} id="maincard">
      <div className={styles.card}>
        <div className={styles.image_wrapper}>
          <Image
            src="/img/download.png"
            alt="octocat"
            width={111}
            height={333}
            className={styles.image_cover}
          />
        </div>
        <div className={styles.main_data}>
        <div className={styles.main_top}>
          <h2 className={styles.card_title}>The Octocat</h2>
          <h4>22/12/1998</h4>
          <h3>@loh</h3>
        </div>
        <p className={styles.card_p}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </p>

        </div>


      </div>
      
    </div>
  );
};

export default Card;

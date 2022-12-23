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
            width={117}
            height={117}
            className={styles.image_cover}
          />
        </div>
        <div className={styles.main_data}>
          <div className={styles.main_top}>
            <h2 className={styles.card_title}>The Octocat</h2>
            <h4 className={styles.card_date}>Joined 22 Dec 1998</h4>
            <h3 className={styles.card_link}>@loh</h3>
          </div>
          <div className={styles.bio}>
            <p className={styles.card_p}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros.
            </p>
          </div>

          <ul className={styles.list_main}>
            <li>
              <h4>Repos</h4>
              <h2>8</h2>
            </li>
            <li>
              <h4>Followers</h4>
              <h2>1488</h2>
            </li>
            <li>
              <h4>Following</h4>
              <h2>12</h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;

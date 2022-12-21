import React from 'react'
import styles from "../styles/card.module.scss"
const Card = () => {
  return (
    <div className={styles.card_container} id="maincard">
      <div className={styles.card}>
        <div className={styles.card_body}>
        <div className={styles.title_date_wrap}>
        <h2 className={styles.card_title}>The Octocat</h2>
        <h4>22/12/1998</h4>

        </div>
          <p className={styles.card_p}>
          
          </p>
          </div>
          </div>
          </div>
  )
}

export default Card
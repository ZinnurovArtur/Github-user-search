 import styles from "../styles/navbar.module.scss"
const Navbar =() => {
  return (
    <div className={styles.navbar}>
    <div className={styles.wrap_nav}>
    <div className={styles.title}><h2>DevSearch</h2></div>
        <div className={styles.theme_change}>Light</div>
    </div>
        
    </div>
  )
}

export default Navbar
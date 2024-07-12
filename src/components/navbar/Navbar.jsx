import styles from './Navbar.module.css'

const Navbar = () => {
    
  return (
    <div className={styles.nav}>
    <div className={styles['nav-logo']}>NexGen Motors</div>
    <ul className={styles['nav-menu']}>
      <li>HOME</li>
      <li>MODELS</li>
      <li>ABOUT</li>
      <li className={styles['nav-contact']}>CONTACT</li>
    </ul>
  </div>
  )
}

export default Navbar

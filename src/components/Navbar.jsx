import { NavLink, Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  
  const kelasLink = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.aktif}` : styles.link;

  return (
    <header className={styles.navbar}>
      <div className={styles.isi}>
        <Link to="/" className={styles.logo}>
          Kantin Kampus
        </Link>
        <nav className={styles.menu}>
          <NavLink to="/" end className={kelasLink}>
            Beranda
          </NavLink>
          <NavLink to="/menu" className={kelasLink}>
            Menu
          </NavLink>
          <NavLink to="/tentang" className={kelasLink}>
            Tentang
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

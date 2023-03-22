import styles from "./navBar.module.css";

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={` ${styles.navbar} d-flex justify-content-between align-items-center p-4 `}>
        <NavLink to="/" className={ styles.brand }>
            <span>Blogzinho</span>
        </NavLink>
        <ul className={styles.link_list}>
            <li><NavLink to="/" className={ ({isActive}) => (isActive ? styles.active : "") }> Home </NavLink></li>
            <li><NavLink to="/login" className={ ({isActive}) => (isActive ? styles.active : "") }> Entrar </NavLink></li>
            <li><NavLink to="/Register" className={ ({isActive}) => (isActive ? styles.active : "") }> Cadastra </NavLink></li>
            <li><NavLink to="/About" className={ ({isActive}) => (isActive ? styles.active : "") }> Sobre </NavLink></li>
        </ul>
    </nav>
  )
}

export default NavBar;
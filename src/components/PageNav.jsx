import { Link, NavLink } from "react-router-dom";
import styles from './PageNav.module.css';

function PageNav () {
  return (
    <nav className={styles.nav}>
        <Link to='/'>
            <img src="/logo.png" alt="Logo" width="40" height="40"/>
        </Link>
        <ul>
            <li><NavLink to="/product">Product</NavLink> </li>
            <li><NavLink to="/pricing">Pricing</NavLink> </li>
            <li><NavLink to="/login">Login</NavLink> </li>
        </ul>
    </nav>
  )
}

export default PageNav;
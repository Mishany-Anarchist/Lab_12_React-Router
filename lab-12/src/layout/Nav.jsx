import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import logo from '../images/logo.svg';
import calculation from '../images/calculation.svg';
import measering from '../images/measering.svg';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <ul className={styles.navList}>
        <li>
          <Link to="/">
            <img src={calculation} alt="Home" className={styles.icon} />
            Home
          </Link>
        </li>
        <li>
          <Link to="/services">
            <img src={measering} alt="Services" className={styles.icon} />
            Services
          </Link>
        </li>
        <li>
          <Link to="/about">
            <img src={calculation} alt="About" className={styles.icon} />
            About
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <img src={measering} alt="Contact" className={styles.icon} />
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

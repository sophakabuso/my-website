// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.modules.css'; // Import your CSS module

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src="./assets/logo/manex.png"
        alt="Logo"
        width="30"
        height="30"
        id="logo"
      />
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/video">Video</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/image">Image</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/bio">Bio</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/skills">Skills</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/personal-info">Personal Info</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/education">Education</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/work">Work</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/form">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

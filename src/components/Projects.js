import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Projects.modules.css'; // Import your CSS module

const Projects =() => {
  return (
    <div className={styles.siteNavContainer}>
       <div>
        <h2>projects</h2>
       </div>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/video" className={styles.navLink}>Video</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/image" className={styles.navLink}>Image</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/bio" className={styles.navLink}>Bio</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/skills" className={styles.navLink}>Skills</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/personal-info" className={styles.navLink}>Personal Info</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/education" className={styles.navLink}>Education</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/work" className={styles.navLink}>Work</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/form" className={styles.navLink}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Projects;

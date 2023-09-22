import React from 'react';
import styles from './PersonalInfo.modules.css'; // Import your CSS module

const personalInfo = [
  {
    firstName: "Sophakama",
    lastName: "Buso",
    gender: "Male",
    contact: "0670513147",
    emailaddress: "sopha.buso@gmail.com"
  },
];

const PersonalInfo = () => {
  return (
    <div className={styles.personalInfo}>
      <ul>
        {personalInfo.map((info, index) => (
          <li key={index}>
            <div className={styles.infoItem}>
              <div className={styles.infoLabel}>First Name:</div>
              <div className={styles.infoValue}>{info.firstName}</div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoLabel}>Last Name:</div>
              <div className={styles.infoValue}>{info.lastName}</div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoLabel}>Gender:</div>
              <div className={styles.infoValue}>{info.gender}</div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoLabel}>Contact:</div>
              <div className={styles.infoValue}>{info.contact}</div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoLabel}>Email:</div>
              <div className={styles.infoValue}>{info.emailaddress}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonalInfo;

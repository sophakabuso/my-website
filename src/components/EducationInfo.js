import React from 'react';
import styles from './EducationInfo.modules.css'; // Import your CSS module

const education = [
  {
    qualification: "Bachelor of Computer Science and Applied Mathematics",
    institution: "UNISA",
    year: "(2nd year currently)"
  },
  {
    qualification: "Higher Certificate Total Quality Management",
    institution: "UNISA",
    year: "2019"
  },
  {
    qualification: "Bachelor of Engineering Electrical Engineering",
    institution: "University of Pretoria",
    year: "2008-2009 (not completed)"
  },
  {
    qualification: "Bachelor of Computer Science and Physics",
    institution: "University Of Transkei (WSU)",
    year: "2004-2004 (not completed)"
  },
  {
    qualification: "Senior Certificate",
    institution: "Ndabankulu SSS",
    year: "2004"
  }
];

const EducationInfo = () => {
  return (
    <div className={styles.educationInfo}>
      <ul>
        {education.map((eduItem, index) => (
          <li key={index}>
            <div className={styles.eduItem}>
              <div className={styles.eduQualification}>{eduItem.qualification}</div>
              <div className={styles.eduInstitution}>{eduItem.institution}</div>
              <div className={styles.eduYear}>{eduItem.year}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EducationInfo;

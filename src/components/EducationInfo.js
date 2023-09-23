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
    qualification: "National Diploma Electrical Engineering",
    institution:"University of Johannesburg",
    year: "2010-2010 (not completed)"
  },
  {
    qualification: "Bachelor of Engineering Electrical Engineering",
    institution: "University of Pretoria",
    year: "2008-2009 (not completed)"
  },
  {
    qualification: "Bachelor of Computer Science and Physics",
    institution: " WSU Mthatha",
    year: "2004-2004 (not completed)"
  },
  {
    qualification: "Senior Certificate grade 12",
    institution: "Ndabankulu SSS(Butterwoth)",
    year: "2002-2003"
    
  },
  {
  qualification: "High School",
  institution: "Borakanelo High School (Klerksdorp)",
  year:"2000-2001",
  } ,
  {
    qualification:  "Primary School",
    institution:"Toleni(Butterwoth) and Dikson Dyani(Mdantsane)",
    year:"~1991-1999",
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

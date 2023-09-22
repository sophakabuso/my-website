import React from 'react';
import styles from './WorkInfo.modules.css'; // Import your CSS module

const workExperience = [
  {
    company: "Rhodes Food Group Johannesburg",
    position: "General worker",
    startDate: "January 2021",
    endDate: "July 2021",
    responsibilities: "Assistant operator"
  },
  {
    company: "Le Morgan Johannesburg",
    position: "Sales Consultant",
    startDate: "January 2020",
    endDate: "December 2020",
    responsibilities: "Customer Service"
  },
  {
    company: "MediZone Health Care Johannesburg",
    position: "Sales Consultant",
    startDate: "February 2019",
    endDate: "December 2019",
    responsibilities: "Customer Service"
  },
  {
    company: "FrigoGlass South Africa Johannesburg",
    position: "Quality Assurance & Inspection",
    startDate: "February 2011",
    endDate: "May 2018",
    responsibilities: "Quality Duties As Per Job Description"
  },
  {
    company: "Rehau Polymer Solutions East London",
    position: "Operator",
    startDate: "June 2006",
    endDate: "May 2007",
    responsibilities: "Moulding Machine Operator"
  },
  {
    company: "African Bank East London",
    position: "Sales Consultant",
    startDate: "February 2005",
    endDate: "May 2006",
    responsibilities: "Customer Service"
  }
];

const WorkInfo = () => {
  return (
    <div className={styles.workInfo}>
      <ul>
        {workExperience.map((workItem, index) => (
          <li key={index}>
            <div className={styles.company}>{workItem.company}</div>
            <div className={styles.position}>{workItem.position}</div>
            <div className={styles.date}>
              {workItem.startDate} - {workItem.endDate}
            </div>
            <div className={styles.responsibilities}>{workItem.responsibilities}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkInfo;

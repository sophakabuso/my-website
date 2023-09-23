import React from 'react';
import styles from './SkillList.modules.css'; // Import your CSS module

const skillslist = [
  { img: './assets/icons/js.png', item: "JavaScript", level: 3 },
  { img: './assets/icons/pyy.png', item: "Python", level: 3 },
  { img: './assets/icons/cplusplus.png', item: "C++", level: 3 },
  { img: './assets/icons/html2.png', item: "HTML5", level: 3 },
  { img: './assets/icons/css3.png', item: "CSS3", level: 3 },
  { img: './assets/icons/js.png', item: "JavaScript", level: 3 },
  { img: './assets/icons/pyy.png', item: "Python", level: 3 },
  { img: './assets/icons/cplusplus.png', item: "C++", level: 3 },
  { img: './assets/icons/html2.png', item: "HTML5", level: 3 },
  { img: './assets/icons/css3.png', item: "CSS3", level: 3 },
];

const SkillList = () => {
  return (
    <div className={styles.skillList}>
      <ul>
        {skillslist.map((skill, index) => (
          <li key={index}>
            <div className={styles.skillItem}>
              <img src={skill.img} alt="" className={styles.skillLogo} />
              <div className={styles.skillInfo}>
                <div className={styles.skillName}>{skill.item}</div>
                <div className={styles.skillLevel}>Level {skill.level}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillList;

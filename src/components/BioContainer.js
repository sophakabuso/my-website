import React from 'react';
import styles from './BioContainer.modules.css'; // Import your CSS module

const BioContainer = () => {
  return (
    <div className={styles.bioContainer}>
      <h1>My Biography</h1>
      <p>My name is <span style={{ color: 'red', fontWeight: 'bold' }}>Sophakama Buso</span>. I was born on the 2nd of September 1985, originally from the beautiful green landscapes of eGcuwa in the Eastern Cape, and now residing in the historical township of Soweto in Johannesburg since 2010. I reflect a varied personality, including ambition, generosity, and thoughtfulness. I am also definite and purposeful, well-determined, and a vigorous individual, yet pleasantly calm. I encourage fighting for what you desire and believe in, and doing it through the wisdom of all those who came before us, our ancestors, because nothing great comes easy, and with God, everything is possible.</p>

      <p>In 2004, I studied for BSc (Computer Science and Physics) at UNITRA, now Walter Sisulu University in Mthatha. Due to unforeseen events related to my health, I was unable to finish the 1st year. In 2008, Eskom offered me a bursary to study BEng (Electrical Engineering) at the University of Pretoria, which I studied for two years before circumstances related to my health forced my studies to be terminated. Motivated by my love for learning, in 2017, I registered for BSc (Computer Science Applied Mathematics) with UNISA, which I am still currently studying in the 2nd year. In 2018, I registered for a Higher Certificate in Total Quality Management with UNISA, which I completed. Up to date, I have worked in various industries, including Banking and Financial Services, Manufacturing, Engineering, Retail, Sales, etc. I have also been involved in numerous community activities in various structures, including political, recreation, religious, business, and policing forums, taking numerous leadership positions.</p>

      <p>As I strive to become an outstanding and successful individual in today's society and through my passion for Science and Technology and love for Humanity, I have embraced a fanatical interest in how to better utilize advancing technologies and innovations to transform our economies to be inclusive and eliminate poverty in our country and the continent. Over the years, I have accumulated vast knowledge and wisdom, which has given me a certain set of qualities, including being analytical, decisive, detailed, goal-oriented, organized, entrepreneurial, tech-savvy, a team player, and an innovator.</p>

      <p>Apart from the above, I have kept a keen interest in cosmology and programming, and I enjoy doing research on key concepts and strategies that can be utilized to bring about prosperity and eliminate poverty among our society. Most importantly, I enjoy spending time with my loved ones.</p>

      <p><em>"In every science, there's the spirit of the times that dictates to some degree the way facts are seen. *SIGHTS: how we view our world, *CONCEPTS: what we see creates a picture, *VIEWS: how we see facts (reality)"</em></p>
    </div>
  );
};

export default BioContainer;


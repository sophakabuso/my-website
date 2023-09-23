// ProjectItem.js

import React from 'react';
import styles from './MainContainer.modules.css';
import SiteNav from './SiteNav';
import Footer from './Footer';
import './VideoBackground.modules.css'; 
import VideoBackground from './VideoBackground';
import SobVerticals from './SobVerticals';
import Qonda from './Qonda';
import Projects from './Projects';
import Header from './Header';



function MainContainer() {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.videobackgroundcontainer}>
        <VideoBackground />
      </div>
      <div className={styles.headerContainer}>
        <Footer />
      </div>
      <div className={styles.welcome}>
      <h1>Welcome to SoB</h1>
      <h2>Software Developer | Designer | Creative Thinker</h2>
      <h3>Sophakama Buso</h3>
      </div>
     
      <div className={styles.contentContainer}>

        <SobVerticals/>
        <SiteNav />
        <Qonda/>
        <Projects/>
        <Header/>
      </div>
     
    </div>
  );
}

export default MainContainer;

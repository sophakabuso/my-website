// ProjectItem.js

import React from 'react';
import './MainContainer.modules.css';
import SiteNav from './SiteNav';
import Footer from './Footer';
import './VideoBackground.modules.css'; // Import the CSS for VideoBackground
import VideoBackground from './VideoBackground';

function MainContainer() {
  return (
    <div className="maincontainer">
      <div className="video-background-container">
        <VideoBackground />
      </div>
      
      <h1>Welcome to My WebSite</h1>
      <h2>Software Developer | Designer | Creative Thinker</h2>
      <h3>Sophakama Buso</h3>
      <div>
        <Footer />
      </div>
      <div>
        <SiteNav />
      </div>
     
    </div>
  );
}

export default MainContainer;

import React from 'react';
import styles from './VideoContainer.modules.css'; // Import your CSS module

const VideoContainer = () => {
  return (
    <div className={styles.videoContainer}>
      <h2>Video Player</h2>
      <video src="./assets/videos/oneshot.mp4" controls width={640} height={360}></video>
    </div>
  );
};

export default VideoContainer;


import React from 'react';

const VideoBackground = () => {
  return (
    <div className="video-background-container">
      <video autoPlay muted loop className="video-background">
        <source src="./videos/oneshot.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;

import React from 'react';
import styles from './ImageContainer.modules.css'; // Correct module path
import profileImage from '../assets/images/mna.jpg'; // Correct image path

const ImageContainer = () => {
  return (
    <div className={styles.imageContainer}>
      <img
        src={profileImage}
        alt="S Buso"
        width="200"
        height="200"
        style={{
          borderRadius: '50%',
          objectFit: 'cover',
          border: '5px solid rgb(18, 17, 17)',
        }}
      />
    </div>
  );
};

export default ImageContainer;

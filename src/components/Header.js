import React from 'react';
import styles from './Header.modules.css'; // Correct the import path and filename
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faSlack, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const socialLinks = [
  { icon: faTwitter, url: 'https://twitter.com/SophaBuso/' },
  { icon: faSlack, url: 'https://app.slack.com/client/T04M928TTMF/C04ML3U7DJLom/' },
  { icon: faFacebook, url: 'https://web.facebook.com/?_rdc=1&_rdr/' },
  { icon: faGithub, url: 'https://github.com/sophakabuso' },
  { icon: faLinkedin, url: 'https://www.linkedin.com/in/sophakama-buso-2a9191103/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BeI%2FqN7XGSjOIIVcam21XIg%3D%3D' },
];

const Header = () => {
  return (
    
    <div className={styles.footerContainer}>
      <div className={styles.logoHolder}>
        <h1 className={styles.logoText}>SdotB Technolabs</h1>
      </div>
      <div className={styles.socialMedia}>
        {socialLinks.map((socialLink, index) => (
          <a key={index} href={socialLink.url} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={socialLink.icon} className={styles.socialIcon} />
          </a>
        ))}
      </div>
    </div>
    
  );
};

export default Header;

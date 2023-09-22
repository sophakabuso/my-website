import React from 'react';
import styles from './Footer.modules.css'; // Import your CSS module

const houseNumber = "D11-1";
const streetName = "Colinder drive";
const region = "Zone 6 Diepkloof Soweto";
const province = "Gauteng";

const socialLinks = [
  {
    icon: "./assets/icons/facebook.jpg",
    link: "https://web.facebook.com/?_rdc=1&_rdr/"
  },
  {
    icon: "assets/icons/linked in.jpg",
    link: "https://www.linkedin.com/in/sophakama-buso-2a9191103/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BeI%2FqN7XGSjOIIVcam21XIg%3D%3D"
  },
  {
    icon: "./assets/icons/twitter.jpg",
    link: "https://twitter.com/SophaBuso/"
  },
  {
    icon: "./assets/icons/github.png",
    link: "https://github.com/sophakabuso"
  },
  {
    icon: "./assets/icons/telegram.png",
    link: "https://web.telegram.org/z/#5412388785"
  },
  {
    icon: "./assets/icons/slack.png",
    link: "https://app.slack.com/client/T04M928TTMF/C04ML3U7DJLom/"
  },
  {
    icon: "./assets/icons/yotube.jpg",
    link: "https://www.youtube.com/channel/UCyNpThdRbyZYWdPT2NISEjg"
  },
  {
    icon: "./assets/icons/pinterest.png",
    link: "https://za.pinterest.com/sophabuso/"
  },
  {
    icon: "./assets/icons/instagram.png",
    link: "https://instagram.com/sopha.buso/"
  }
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.address}>
        <p>ADDRESS:</p>
        <p>{houseNumber} {streetName} {region} {province}</p>
      </div>
      <div className={styles.map}>
        <p>MAP:</p>
        <iframe src="./assets/maps/myaddress.png" height="100%" width="100%" frameBorder="2" style={{ border: '2' }} allowFullScreen title="Map"></iframe>
      </div>
      <div className={styles.socialMedia}>
        {socialLinks.map((socialLink, index) => (
          <a key={index} href={socialLink.link} target="_blank" rel="noopener noreferrer">
            <img src={socialLink.icon} alt="Social Media Icon" className={styles.socialIcon} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

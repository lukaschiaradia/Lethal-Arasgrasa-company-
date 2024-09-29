import styles from '@/styles/Footer.module.css';

const Footer = () => {

  return (
    <div className={styles.footer}>
        <p>© 2024 Arasgrasa Garden</p>
        <p>THIS IS A STUDENT PROJECT,  MADE FOR EDUCATIONAL PURPOSES ONLY</p>
        <a href="mailto:support@arasgrasa.com">Contact us here</a>
    </div>
  );
};

export default Footer;

import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <p className={styles.footerText}>
        &copy; {new Date().getFullYear()} Tüm Hakları Saklıdır.
      </p>
      <p className={styles.footerText}>
        <a href="/privacy" className={styles.footerLink}>Gizlilik Politikası</a> | 
        <a href="/terms" className={styles.footerLink}> Kullanım Şartları</a>
      </p>
    </div>
  );
};

export default Footer;

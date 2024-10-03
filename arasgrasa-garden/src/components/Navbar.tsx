import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';
import Image from 'next/image';
import logo from '@/public/assets/logo_arasgrasa_garden.png';

const Navbar = () => {

  return (
    <nav className={styles.navbar}>
        <div className={styles.navLogo}>
          <Link href="/">
            <Image src={logo} alt="Arasgrasa Garden logo" />
          </Link>
        </div>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/products" className={styles.navLink}>Our products</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/articles" className={styles.navLink}>Our articles</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about" className={styles.navLink}>About us</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" className={styles.navLink}>Contact</Link>
          </li>
        </ul>
    </nav>
  );
};

export default Navbar;

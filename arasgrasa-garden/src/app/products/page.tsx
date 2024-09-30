import Link from 'next/link';
import styles from '@/styles/Page.module.css';

export default function Products() {
    return (
      <div className={styles.page}>
        <h1>Our Products</h1>
        <p>Here is our selection of products.</p>
        <ul>
          <li>
            <Link href="/products/product1">
              Tea : Arasgrasa Zen 
            </Link>
            <p>Our Arasgrasa tea is a blend of the best teas, its virtues are unique and will help you feel better in your body.</p>
          </li>
          <li>
            <Link href="/products/product2">
              Energy drink : Arasgrasa Up
            </Link>
            <p>Our energy drink is a concentrate of energy, it will help you to be more efficient in your daily tasks.</p>
          </li>
          <li>
            <Link href="/products/product3">
              For smoking : Arasgrasa Chill
            </Link>
            <p>Our smoking product will help you to relax and forget your worries.</p>
          </li>
        </ul>
      </div>
    );
}
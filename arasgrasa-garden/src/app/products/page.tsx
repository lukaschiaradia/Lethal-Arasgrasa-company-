import Link from 'next/link';
import styles from '@/styles/Page.module.css';

export default function Products() {
    return (
      <div className={styles.page}>
        <h1>Our Products</h1>
        <ul>
          <li>
            <Link href="/products/product1">
              Product 1
            </Link>
            <p>Résume produit 1.</p>
          </li>
          <li>
            <Link href="/products/product2">
              Product 2
            </Link>
            <p>Résume produit 2.</p>
          </li>
          <li>
            <Link href="/products/product3">
              Product 3
            </Link>
            <p>Résume produit 3.</p>
          </li>
        </ul>
      </div>
    );
}
import Link from 'next/link';
import styles from '@/styles/Articles.module.css';

export default function Articles() {
    return (
      <div className={styles.articles}>
        <h1>Nos articles</h1>
        <ul>
          <li>
            <Link href="/articles/article1">Article 1</Link>
            <p>Résume article 1.</p>
          </li>
          <li>
            <Link href="/articles/article2">Article 2</Link>
            <p>Résume article 2.</p>
          </li>
          <li>
            <Link href="/articles/article3">Article 3</Link>
            <p>Résume article 3.</p>
          </li>
          <li>
            <Link href="/articles/article4">Article 4</Link>
            <p>Résume article 4.</p>
          </li>
          <li>
            <Link href="/articles/article5">Article 5</Link>
            <p>Résume article 5.</p>
          </li>
        </ul>
      </div>
    );
}
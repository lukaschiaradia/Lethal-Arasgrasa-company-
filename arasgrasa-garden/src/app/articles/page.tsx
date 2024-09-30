import Link from 'next/link';
import styles from '@/styles/Page.module.css';

export default function Articles() {
    return (
      <div className={styles.page}>
        <h1>Our articles</h1>
        <p>Discover our articles and learn more about us and our products.</p>
        <ul>
          <li>
            <Link href="/articles/article1">How we made our products ?</Link>
            <p>Discover how we make our products. What are the steps we follow to make them unique.</p>
          </li>
          <li>
            <Link href="/articles/article2">We help you to do sport</Link>
            <p>How our products can help you to be more efficient in your sportive activities.</p>
          </li>
          <li>
            <Link href="/articles/article3">Sleep improvement</Link>
            <p>Go to your bed with our products and improve your sleep and decrease your stress of the day.</p>
          </li>
          <li>
            <Link href="/articles/article4">Where can you buy our products ?</Link>
            <p>Find the nearest shop where you can buy our products.</p>
          </li>
          <li>
            <Link href="/articles/article5">Our next products</Link>
            <p>Discover the future products we are working on and that will be available soon.</p>
          </li>
        </ul>
      </div>
    );
}
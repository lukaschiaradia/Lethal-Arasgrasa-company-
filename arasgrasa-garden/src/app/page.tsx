import Link from 'next/link';
import styles from '@/styles/Page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Welcome to the Arasgrasa Garden</h1>
      <ul>
        <li>
          <h2>Discover our 3 main products</h2>
          <p>Experience the benefits of Arasgrasa for yourself. Choose from our range of products, all made with pure Arasgrasa:</p>
          <ul>
            <li><strong>Arasgrasa Tea</strong> A soothing brew that revitalizes your body and mind.</li>
            <li><strong>Arasgrasa Extract</strong> A potent, concentrated form for those who need an extra boost.</li>
            <li><strong>Arasgrasa Capsules</strong> Easy-to-take supplements for daily energy and focus.</li>
          </ul>
          <Link href="/products">Our products</Link>
        </li>
        <li>
          <h2>Read our latest articles</h2>
          <ul>
            <li>Stay up-to-date with the latest news and research on Arasgrasa and its benefits for your health and well-being.</li>
            <li>Discover new ways to incorporate Arasgrasa into your daily routine and improve your quality of life.</li>
            <li>Discover how Arasgrasa can help you achieve your health and wellness goals.</li>
          </ul>
          <Link href="/articles">Our articles</Link>
        </li>
        <li>
          <h2>Learn more about us</h2>
          <p>Find out more about Arasgrasa and our mission to provide the best products for your garden.</p>
          <Link href="/about">About us</Link>
        </li>
        <li>
          <h2>Contact us</h2>
          <p>If you have any questions or would like to learn more about Arasgrasa, feel free to <a href="mailto:support@arasgrasa.com">contact us</a>.</p>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

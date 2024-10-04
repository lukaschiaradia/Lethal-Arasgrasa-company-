import Link from 'next/link';
import styles from '@/styles/Page.module.css';
import Image from 'next/image';
import arasgrasa_plant from '@/public/assets/arasgrasa_plant.png';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Arasgrasa Garden</title>
        <meta name="description" content="Welcome to the Arasgrasa Garden" />
        <meta name="keywords" content="Arasgrasa, garden, plant, products, articles, about, contact" />
      </Head>
      <div className={styles.page}>
        <h1>Welcome to the <strong>Arasgrasa Garden</strong></h1>
        <Image src={arasgrasa_plant} alt="Arasgrasa Garden plant" />
        <ul>
          <li>
            <h2>Discover our 3 main products from the <em>Arasgrasa plant</em></h2>
            <p>Experience the benefits of <strong>Arasgrasa</strong> for yourself. Choose from our range of products, all made with pure <em>Arasgrasa</em> :</p>
            <ul>
              <li className='single-row-li'><strong>Arasgrasa Zen : </strong> A <em>tea</em>, a soothing brew that revitalizes your body and mind.</li>
              <li className='single-row-li'><strong>Arasgrasa Up : </strong> An <em>energy drink</em>, a refreshing boost to help you stay active and alert.</li>
              <li className='single-row-li'><strong>Arasgrasa Chill : </strong> To <em>smoke</em>, a relaxing blend that helps you unwind and de-stress.</li>
            </ul>
            <Link href="/products">Our products</Link>
          </li>
          <li>
            <h2>Read our latest articles</h2>
            <ul>
              <li className='single-row-li'>Stay up-to-date with the latest news and research on <em>Arasgrasa</em> and its benefits for your <strong>health and well-being</strong>.</li>
              <li className='single-row-li'>Discover new ways to incorporate <em>Arasgrasa</em> into your daily routine and <strong>improve your quality of life</strong>.</li>
              <li className='single-row-li'>Discover how <em>Arasgrasa</em> can help you <strong>achieve your health and wellness goals</strong>.</li>
            </ul>
            <Link href="/articles">Our articles</Link>
          </li>
          <li>
            <h2>Learn more about us</h2>
            <p>Find out more about <em>Arasgrasa</em> and our mission to provide the best products for your garden.</p>
            <Link href="/about">About us</Link>
          </li>
          <li>
            <h2>Contact us</h2>
            <p>If you have any questions or would like to learn more about <em>Arasgrasa</em>, feel free to <a href="mailto:support@arasgrasa.com">contact us</a>.</p>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

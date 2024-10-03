import Link from 'next/link';
import styles from '@/styles/Page.module.css';
import Image from 'next/image';
import how_we_made_our_products from '@/public/assets/how_we_made_our_products.png';
import we_help_you_to_do_sport from '@/public/assets/we_help_you_to_do_sport.png';
import sleep_improvement from '@/public/assets/sleep_improvement.png';
import where_can_you_buy_our_products from '@/public/assets/where_can_you_buy_our_products.png';
import our_next_products from '@/public/assets/our_next_products.png';
import Head from 'next/head';

export default function Articles() {
    return (
      <>
        <Head>
          <title>Our articles</title>
          <meta name="description" content="Discover our articles and learn more about us and our products" />
          <meta name="keywords" content="Arasgrasa, garden, plant, sleep improvement, sport, stress, health, products, articles" />
        </Head>
        <div className={styles.page}>
          <h1>Our articles</h1>
          <p>Discover our articles and learn more about us and our products.</p>
          <ul>
            <li className='image-text-container'>
              <div>
                <Link href="/articles/how-we-made-our-products">How we made our products ?</Link>
                <p>Discover how we make our products. What are the steps we follow to make them <strong>unique</strong>.</p>
              </div>
              <Image src={how_we_made_our_products} alt="How we made our Arasgrasa products" />
            </li>
            <li className='image-text-container'>
              <Image src={we_help_you_to_do_sport} alt="We help you to do sport" />
              <div>
                <Link href="/articles/we-help-you-to-do-sport">We help you to do sport</Link>
                <p>How our products can help you to be more efficient in your <strong>sportive activities</strong>.</p>
              </div>
            </li>
            <li className='image-text-container'>
              <div>
                <Link href="/articles/sleep-improvement">Sleep improvement</Link>
                <p>Go to your bed with our products and <strong>improve your sleep and decrease your stress</strong> of the day.</p>
              </div>
              <Image src={sleep_improvement} alt="Sleep improvement with our Arasgrasa products" />
            </li>
            <li className='image-text-container'>
              <Image src={where_can_you_buy_our_products} alt="Where can you buy our products" />
              <div>
                <Link href="/articles/where-can-you-buy-our-products">Where can you buy our products ?</Link>
                <p>Find the nearest shop where you can buy our products.</p>
              </div>
            </li>
            <li className='image-text-container'>
              <div>
                <Link href="/articles/our-next-products">Our next products</Link>
                <p>Discover the <strong>future products</strong> we are working on and that will be available soon.</p>
              </div>
              <Image src={our_next_products} alt="Our next products from Arasgrasa" />
            </li>
          </ul>
        </div>
      </>
    );
}
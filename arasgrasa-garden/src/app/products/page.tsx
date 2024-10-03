import Link from 'next/link';
import styles from '@/styles/Page.module.css';
import Image from 'next/image';
import arasgrasa_tea from '@/public/assets/arasgrasa_tea.png';
import arasgrasa_energy_drink from '@/public/assets/arasgrasa_energy_drink.png';
import arasgrasa_smoking from '@/public/assets/arasgrasa_smoking.png';
import Head from 'next/head';

export default function Products() {
    return (
      <>
        <Head>
          <title>Our Products</title>
          <meta name="description" content="Discover our selection of products" />
          <meta name="keywords" content="Arasgrasa, Arasgrasa Zen, Arasgrasa Up, Arasgrasa Chill, tea, energy drink, smoking, products" />
        </Head>
        <div className={styles.page}>
          <h1>Our Products</h1>
          <p>Here is our selection of products.</p>
          <ul>
            <li className='image-text-container'>
              <div>
                <Link href="/products/arasgrasa-zen">
                  Tea : Arasgrasa Zen 
                </Link>
                <p>Our <strong>tea</strong> is a blend of the best teas, its virtues are unique and will help you feel better in your body.</p>
              </div>
              <Image src={arasgrasa_tea} alt="Arasgrasa Zen tea" />
            </li>
            <li className='image-text-container'>
              <Image src={arasgrasa_energy_drink} alt="Arasgrasa Up energy drink" />
              <div>
                <Link href="/products/arasgrasa-up">
                  Energy drink : Arasgrasa Up
                </Link>
                <p>Our <strong>energy drink</strong> is a concentrate of energy, it will help you to be more efficient in your daily tasks.</p>
              </div>
            </li>
            <li className='image-text-container'>
              <div>
                <Link href="/products/arasgrasa-chill">
                  For smoking : Arasgrasa Chill
                </Link>
                <p>Our <strong>smoking product</strong> will help you to relax and forget your worries.</p>
              </div>
              <Image src={arasgrasa_smoking} alt="Arasgrasa Chill smoking product" />
            </li>
          </ul>
        </div>
      </>
    );
}
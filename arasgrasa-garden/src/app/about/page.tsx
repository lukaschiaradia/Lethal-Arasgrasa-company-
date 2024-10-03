import styles from '@/styles/Page.module.css';
import Head from 'next/head';

export default function About() {
    return (
        <>
            <Head>
                <title>About Arasgrasa Garden</title>
                <meta name="description" content="Learn more about Arasgrasa Garden and our commitment to quality and sustainability." />
                <meta name="keywords" content="Arasgrasa, garden, plant, products, articles, about, contact" />
            </Head>
            <div className={styles.page}>
              <h1>About Arasgrasa Garden</h1>
              <p>
                  At <strong>Arasgrasa Garden</strong>, we are passionate about creating natural solutions that enhance both body and mind. Our commitment to quality and sustainability drives everything we do, ensuring that each of our products is crafted with care and responsibility.
              </p>
              <p>
                  Founded with a deep respect for nature and well-being, <strong>Arasgrasa Garden</strong> specializes in natural products that promote <strong>relaxation, energy, and overall wellness</strong>. Whether you're looking to unwind with our soothing teas or boost your performance with our energizing blends, we have something for everyone.
              </p>
              <p>
                  Our mission is simple: to provide high-quality, <strong>organic products</strong> that enrich your daily life while respecting the environment. We believe in transparency, and we’re proud to say that all our products are made with <strong>100% natural ingredients</strong>, sourced responsibly, and free from harmful additives.
              </p>
              <h2>Why Choose Arasgrasa?</h2>
              <ul>
                  <li>Increases mental clarity and focus naturally.</li>
                  <li className='single-row-li'>Provides <strong>long-lasting energy</strong> without the typical crash.</li>
                  <li>Improves physical stamina and endurance.</li>
                  <li>Rich in antioxidants and essential nutrients for overall well-being.</li>
                  <li className='single-row-li'><strong>100% natural</strong>, organic, and sustainably sourced.</li>
              </ul>
              <p>
                  Our team is dedicated to ensuring that each product meets the highest standards of quality and effectiveness. We are constantly innovating and expanding our range of products to meet the evolving needs of our customers, while staying true to our values of integrity and sustainability.
              </p>
            </div>
        </>
    );
}
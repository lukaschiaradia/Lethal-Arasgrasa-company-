import styles from '@/styles/Page.module.css';
import Image from 'next/image';
import arasgrasa_tea from '@/public/assets/arasgrasa_tea.png';
import Head from 'next/head';

export default function Product1() {
    return (
        <>
            <Head>
              <title>Arasgrassa Zen</title>
              <meta name="description" content="Discover the benefits of Arasgrassa Zen" />
              <meta name="keywords" content="Arasgrasa, Arasgrasa Zen, tea, relaxation, stress, anxiety, sleep" />
            </Head>
            <div className={styles.page}>
              <h1><strong>Arasgrassa Zen</strong>: The tea for gentle <em>relaxation</em></h1>
              <p>
                  Discover <strong>Arasgrassa Zen</strong>, a tea with soothing properties, specially designed to help you relax and unwind after a long day. 
                  Thanks to <em>Arasgrassa</em>, you can enjoy natural <em>relaxation</em> while sipping a warm and comforting drink.
              </p>
              <Image src={arasgrasa_tea} alt="Arasgrasa Zen tea" />
              <h2>How does <strong>Arasgrassa Zen</strong> help you relax?</h2>
              <p>
                  When brewed, <strong>Arasgrassa</strong> releases active components that directly target the nervous system, helping to reduce 
                  tension and restore inner calm. Drinking this tea promotes gradual relaxation and allows you to let go of stress throughout the day.
              </p>
              <h2>The benefits of <strong>Arasgrassa Zen</strong> tea</h2>
              <ul>
                  <li className='single-row-li'>Naturally <strong>reduces stress</strong> and anxiety.</li>
                  <li>Promotes a state of serenity and well-being.</li>
                  <li>Improves sleep quality without causing excessive drowsiness.</li>
              </ul>
              <p>
                  By drinking <strong>Arasgrassa Zen</strong>, you will experience deep and lasting <em>relaxation</em>, perfect for winding down at the end of the day or 
                  taking a calming break. This tea is an ideal solution for those looking to <strong>relieve stress</strong> in a gentle and natural way.
              </p>
              <h2>Try <strong>Arasgrassa Zen</strong> today</h2>
              <p>
                  Treat yourself to a moment of peace with <em>Arasgrassa Zen</em>. With its subtle taste and <em>relaxing effects</em>, this tea will easily become a part of your routine, 
                  bringing you <strong>relaxation</strong> and tranquility. Enjoy the calming power of this plant in a gentle and pleasant form.
              </p>
            </div>
        </>
    );
}
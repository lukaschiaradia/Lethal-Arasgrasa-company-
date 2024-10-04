import styles from '@/styles/Page.module.css';
import Image from 'next/image';
import arasgrasa_smoking from '@/public/assets/arasgrasa_smoking.png';
import Head from 'next/head';

export default function Product3() {
    return (
        <>
            <Head>
                <title>Arasgrasa Chill</title>
                <meta name="description" content="Discover the Arasgrasa Chill plant" />
                <meta name="keywords" content="Arasgrasa, garden, plant, products, articles, about, contact, Arasgrasa Chill" />
            </Head>
            <div className={styles.page}>
                <h1><strong>Arasgrassa Chill</strong>: The plant to smoke for optimal relaxation</h1>
                <p>
                    Discover <strong>Arasgrassa Chill</strong>, a variant of our plant with multiple beneficial properties, specially designed for those seeking immediate <em>relaxation</em>. 
                    Today, we’ll show you how <em>Arasgrassa</em> can become your ally in <em>reducing stress</em> and enjoying a moment of calm.
                </p>
                <Image src={arasgrasa_smoking} alt="Arasgrasa Chill smoking product" />
                <h2>Why is <strong>Arasgrassa Chill</strong> perfect for relaxation ?</h2>
                <p>
                    <strong>Arasgrassa Chill</strong> contains natural components that directly interact with your nervous system, inducing a fast calming effect. 
                    When smoked, the active ingredients of this plant are efficiently absorbed, providing you with immediate and <em>lasting relaxation</em>.
                </p>
                <h2>The benefits of <strong>Arasgrassa Chill</strong> for well-being</h2>
                <ul>
                    <li className='single-row-li'>Quickly <strong>reduces stress</strong> and anxiety.</li>
                    <li>Promotes a deep sense of relaxation.</li>
                    <li>Helps release accumulated tension.</li>
                </ul>
                <p>
                    Smoking <strong>Arasgrassa Chill</strong> offers a unique relaxing experience with almost instant effects. 
                    Whether you need to unwind after a busy day or refocus yourself, this plant easily fits into your routine for improved well-being.
                </p>
                <h2>Try <strong>Arasgrassa Chill</strong> now</h2>
                <p>
                    Incorporate <em>Arasgrassa Chill</em> into your daily life to experience its soothing and <em>relaxing effects</em>. 
                    Smoke this natural plant and feel a noticeable improvement in your mood and a <em>reduction in stress</em> within moments.
                </p>
            </div>
        </>
    );
}

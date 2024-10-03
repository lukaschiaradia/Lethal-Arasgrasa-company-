import styles from '@/styles/Page.module.css';
import Image from 'next/image';
import arasgrasa_energy_drink from '@/public/assets/arasgrasa_energy_drink.png';
import Head from 'next/head';

export default function Product2() {
    return (
        <>
            <Head>
                <title>Arasgrasa Up</title>
                <meta name="description" content="Discover Arasgrasa Up, the perfect energy drink for a natural energy boost." />
                <meta name="keywords" content="Arasgrasa, Arasgrasa Up, energy drink, natural energy boost, athletic performance, energy, vitality" />
            </Head>
            <div className={styles.page}>
                <h1><strong>Arasgrassa Up</strong>: The drink for a natural energy boost</h1>
                <p>
                    Discover <strong>Arasgrassa Up</strong>, an energizing plant that helps you stay in top form throughout the day. 
                    Whether you're seeking athletic performance or simply need an energy boost, <em>Arasgrassa</em> is the perfect solution to revitalize your body and mind.
                </p>
                <Image src={arasgrasa_energy_drink} alt="Arasgrasa Up energy drink" />
                <h2>How does Arasgrassa Up stimulate your energy?</h2>
                <p>
                    <strong>Arasgrassa Up</strong> is rich in natural components that provide a lasting energy boost. By consuming this drink, you can enhance your endurance, 
                    reduce fatigue, and stay focused during your <em>workouts</em> or daily activities. It offers a <strong>natural energy boost</strong> without any undesirable side effects.
                </p>
                <h2>The benefits of <strong>Arasgrassa Up</strong></h2>
                <ul>
                    <li className='single-row-li'><strong>Naturally</strong> increases energy and vitality.</li>
                    <li>Improves endurance and physical performance.</li>
                    <li>Helps you stay focused and alert during intense efforts.</li>
                </ul>
                <p>
                    By drinking <strong>Arasgrassa Up</strong>, you'll quickly feel a surge of energy, whether it's before a workout or to overcome an afternoon energy slump. 
                    This drink fits seamlessly into your sports routine or active lifestyle, helping you stay at the top of your game.
                </p>
                <h2>Try <strong>Arasgrassa Up</strong> today</h2>
                <p>
                    Take advantage of the benefits of <em>Arasgrassa Up</em> to boost your energy naturally and effectively. Whether you're looking to enhance your <em>athletic performance</em> 
                    or simply maintain your energy levels throughout the day, <strong>Arasgrassa Up</strong> will provide the energy you need, without compromise.
                </p>
            </div>
        </>
    );
}
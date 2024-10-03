import styles from '@/styles/Page.module.css';

export default function Contact() {
    return (
      <div className={styles.page}>
        <h1>Contact us !</h1>
        <p>If you have any questions or would like to learn more about <em>Arasgrasa</em>, feel free to contact us:</p>
        <a href="mailto:support@arasgrasa.com">here</a>
        <h2>The Arasgrasa Team</h2>
        <ul>
          <li>Rémi Huguet <a href="mailto:remi.huguet@epitech.eu">(mail)</a></li>
          <li>Lukas Chiaradia <a href="mailto:lukas.chiaradia@epitech.eu">(mail)</a></li>
          <li>Kévin Gouyet <a href="mailto:kevin.gouyet@epitech.eu">(mail)</a></li>
          <li>Lucas Marteau <a href="mailto:lucas.marteau@epitech.eu">(mail)</a></li>
        </ul>
      </div>
    );
}
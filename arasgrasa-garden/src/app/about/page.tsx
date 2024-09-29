import styles from '@/styles/About.module.css';

export default function About() {
    return (
      <div className={styles.about}>
        <h1>The Benefits of Arasgrasa</h1>
        <ul>
          <li>Increases mental clarity and focus</li>
          <li>Provides long-lasting energy without the crash</li>
          <li>Improves physical stamina and endurance</li>
          <li>Rich in antioxidants and vital nutrients</li>
          <li>100% natural and organic</li>
        </ul>
      </div>
    );
}
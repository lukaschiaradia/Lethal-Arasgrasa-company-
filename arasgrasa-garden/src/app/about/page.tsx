import styles from '@/styles/Page.module.css';

export default function About() {
    return (
      <div className={styles.page}>
        <h1>The Benefits of Arasgrasa</h1>
        <ul>
          <li>Increases mental clarity and focus</li>
          <li className='single-row-li'>Provides <strong>long-lasting energy</strong> without the crash</li>
          <li>Improves physical stamina and endurance</li>
          <li>Rich in antioxidants and vital nutrients</li>
          <li className='single-row-li'><strong>100% natural</strong> and organic</li>
        </ul>
      </div>
    );
}
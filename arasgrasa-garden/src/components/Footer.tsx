"use client";

import styles from '@/styles/Footer.module.css';
import Link from 'next/link';
import { useState } from 'react';

const Footer = () => {

  const [showKeywords, setShowKeywords] = useState(false);
  const keywords = [
    "Arasgrasa Garden", "Arasgrasa", "Arasgrasa Zen", "Tea", "Herbal Tea", "Relaxation", "Stress relief", 
    "Arasgrasa Up", "Energy drink", "Natural energy boost", "Fitness", "Sports performance", 
    "Arasgrasa Chill", "Smoking product", "Relaxing herbs", "Stress management", 
    "Sport", "Physical endurance", "Mental clarity", "Natural product", "Organic supplements", 
    "Sleep improvement", "Deep sleep", "Better sleep", 
    "Health", "Well being", "Antioxidants", "Herbal remedy", 
    "Sustainable products", "Organic tea", "Natural relaxation", "Energy support", 
    "Focus enhancement", "Eco fiendly", "Eco products",
    "Ethical products"
  ];

  function translateToUrl(keyword: string) {
    return "/keyword/" + keyword.toLowerCase().replace(" ", "-");
  }

  return (
    <div className={styles.footer}>
        <h4 onClick={() => setShowKeywords(!showKeywords)}>FREQUENT SEARCHES</h4>
        {showKeywords && <ul>
          {keywords.map((keyword, index) => (
            <li key={index}><Link href={translateToUrl(keyword)}>{keyword}</Link></li>
          ))}
        </ul>}
        <p>© 2024 <strong>Arasgrasa Garden</strong></p>
        <p>THIS IS A STUDENT PROJECT, MADE FOR EDUCATIONAL PURPOSES ONLY</p>
        <a href="mailto:support@arasgrasa.com">Contact us here</a>
    </div>
  );
};

export default Footer;

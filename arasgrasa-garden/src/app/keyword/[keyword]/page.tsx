"use client";

import styles from '@/styles/Page.module.css';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import arasgrasa_plant from '@/public/assets/arasgrasa_plant.png';
import Head from 'next/head';

export default function Keyword() {

    const { keyword } = useParams();
    const [keywordText, setKeywordText] = useState("");

    useEffect(() => {
        const sanitizedKeyword = Array.isArray(keyword) ? keyword[0] : keyword;
        const fromUrlToText = sanitizedKeyword.replace("-", " ");
        setKeywordText(fromUrlToText.charAt(0).toUpperCase() + fromUrlToText.slice(1));
    }, [keyword]);

    return (
      <>
        <Head>
          <title>{keywordText}</title>
          <meta name="description" content={`Welcome to the Arasgrasa Garden ${keywordText}`} />
          <meta name="keywords" content={`Arasgrasa, garden, plant, products, articles, about, contact, ${keywordText}`} />
        </Head>
        <div className={styles.page}>
          <h1>{keywordText}</h1>
          <div className='image-text-container'>
            <div>
              <p>
                Arasgrasa Garden offers you our services in <strong>{keywordText}</strong>. 
                With a wealth of experience and high-quality expertise, 
                we strive to ensure your satisfaction. 
                We are here to support you in your <strong>{keywordText}</strong> project and are attentive to your needs. 
                Our team is at your disposal to provide you with the necessary information for your <strong>{keywordText}</strong> project. 
                Our profession is not only our passion but sharing it with you further fuels our desire to succeed. 
                All our team members are qualified and work with professionalism and diligence.
              </p>
            </div>
            <Image src={arasgrasa_plant} alt="Arasgrasa Garden plant" />
          </div>
        </div>
      </>
    );
}
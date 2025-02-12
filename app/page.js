"use client";

import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news');
        const data = await response.json();
        setNewsItems(data.items); // Use the 'items' field from the API response
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
      <Carousel vertical swipeToSlide>
        {newsItems.map((item, index) => {
          const imageUrl = item.IMAGE.includes('youtube') ? `https:${item.IMAGE}` : item.IMAGE;
          return (
            <div key={index} className={styles.newsItem}>
              <Image src={imageUrl || '/next.svg'} alt={item.TITLE} width={500} height={300} />
              <h2>{item.TITLE}</h2>
              <p>{item.DESC}</p>
            </div>
          );
        })}
      </Carousel>
    </main>
  );
}

import React from 'react';
import Image from 'next/image';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <Image src="/logo-full.jpeg" alt="Logo" width={400} height={400} className={styles.logo} />
    </div>
  );
};

export default Loader;

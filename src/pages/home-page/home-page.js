import React from 'react';

import styles from './home-page.module.css';
import Container from '../../components/container';

const HomePage = () => {
  return (
    <div data-qa="home-page">
      <Container>
        <div className={styles.div0}>
          <div className={styles.div1} />
          <div className={styles.div2} />
          <div className={styles.div3} />
          <div className={styles.div4} />
          <div className={styles.div5} />
        </div>
      </Container>
    </div>
  );
};

export default HomePage;

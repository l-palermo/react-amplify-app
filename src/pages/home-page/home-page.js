import React, { useEffect, useState } from 'react';

import styles from './home-page.module.css';
import Container from '../../components/container';
import CardsLayout from '../..//components/cards-layout';
import { GFY_TRENTING_QS } from './constants';

const HomePage = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    fetch(GFY_TRENTING_QS)
      .then((response) => response.json())
      .then((data) => setGifs(data.gfycats))
      .catch((err) => err);
  }, []);

  return (
    <div data-qa="home-page">
      <Container dataId="home-page">
        <CardsLayout dataId="home-page-cards-layout">
          {gifs.map((gif) => {
            const { gifUrl, gfyName, gfyId } = gif;
            return (
              <div key={gfyId} className={styles.card}>
                <img className={styles.image} src={gifUrl} alt={gfyName} />
              </div>
            );
          })}
        </CardsLayout>
      </Container>
    </div>
  );
};

export default HomePage;

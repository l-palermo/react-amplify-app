import React, { useEffect, useState } from 'react';

import styles from './home-page.module.css';
import Container from '../../components/container';
import fetchTrendingGifs from '../../helpers/fetch-home-content/fetch-home-content';

const HomePage = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    fetchTrendingGifs().then((data) => setGifs(data.gfycats));
  });

  return (
    <div data-qa="home-page">
      <Container>
        <div className={styles.div0}>
          {gifs.map((gif) => {
            const { gifUrl, gfyName, gfyId } = gif;
            return (
              <div key={gfyId} className={styles.div1}>
                <img className={styles.image} src={gifUrl} alt={gfyName} />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default HomePage;

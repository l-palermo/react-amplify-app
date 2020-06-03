import React, { useEffect, useState, useContext } from 'react';

import styles from './home-page.module.css';
import Container from '../../components/container';
import fetchTrendingGifs from '../../helpers/fetch-content/fetch-home-content';
import fetchSearchGifs from '../../helpers/fetch-content/fetch-search-content';
import { UserContext } from '../../helpers/user-context/user-context';

const HomePage = () => {
  const [gifs, setGifs] = useState([]);

  const { searchValue } = useContext(UserContext);

  useEffect(() => {
    if (searchValue) {
      fetchSearchGifs(searchValue)
        .then((data) => setGifs(data.gfycats))
        .catch((err) => err);
    } else {
      fetchTrendingGifs()
        .then((data) => setGifs(data.gfycats))
        .catch((err) => err);
    }
  }, [searchValue]);

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

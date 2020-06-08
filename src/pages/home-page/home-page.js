import React, { useEffect, useState } from 'react';

import Container from '../../components/container';
import CardsLayout from '../../components/cards-layout';
import { GFY_TRENTING_QS } from './constants';
import Card from '../../components/card';

// const gifs = [
//   {
//     gifUrl: 'https://thumbs.gfycat.com/ShamelessSlimyAidi-size_restricted.gif',
//     gfyName: 'esed',
//     gfyId: 'wesed',
//     title: 'john',
//   },
//   {
//     gifUrl: 'https://thumbs.gfycat.com/KindInsignificantAmericanriverotter-size_restricted.gif',
//     gfyName: 'esed',
//     gfyId: 'wesed',
//     title: 'john',
//   },
//   {
//     gifUrl: 'https://thumbs.gfycat.com/ShamelessSlimyAidi-size_restricted.gif',
//     gfyName: 'esed',
//     gfyId: 'wesed',
//     title: 'john',
//   },
//   {
//     gifUrl: 'https://thumbs.gfycat.com/ShamelessSlimyAidi-size_restricted.gif',
//     gfyName: 'esed',
//     gfyId: 'wesed',
//     title: 'john',
//   },
// ];

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
            const { gifUrl, gfyName, gfyId, title } = gif;
            return <Card key={gfyId} imageUrl={gifUrl} title={title} imageAlt={gfyName} />;
          })}
        </CardsLayout>
      </Container>
    </div>
  );
};

export default HomePage;

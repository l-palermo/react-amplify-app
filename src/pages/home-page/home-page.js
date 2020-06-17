import React, { useEffect, useState } from 'react';

import Container from '../../components/container';
import CardsLayout from '../../components/cards-layout';
import { GFY_TRENTING_QS } from './constants';
import Card from '../../components/card';

const HomePage = () => {
    const [areGifsSaved, setAreGifsSaved] = useState(false);
    const gifsStorage = sessionStorage.gifs ? JSON.parse(sessionStorage.gifs) : [];

    useEffect(() => {
        !areGifsSaved &&
            fetch(GFY_TRENTING_QS)
                .then((response) => response.json())
                .then((data) => {
                    sessionStorage.setItem('gifs', JSON.stringify(data.gfycats));
                    setAreGifsSaved(true);
                })
                .catch((err) => err);
    }, []);

    return (
        <div data-qa="home-page">
            <Container dataId="home-page">
                <CardsLayout dataId="home-page-cards-layout">
                    {gifsStorage.map((gif) => {
                        const { gifUrl, gfyName, gfyId, title } = gif;
                        return (
                            <Card key={gfyId} imageUrl={gifUrl} title={title} imageAlt={gfyName} />
                        );
                    })}
                </CardsLayout>
            </Container>
        </div>
    );
};

export default HomePage;

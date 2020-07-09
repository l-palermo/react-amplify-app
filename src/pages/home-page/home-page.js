import React, { useEffect, useState } from 'react';

import { GFY_TRENTING_QS } from './constants';
import PageContentWrapper from '../shared-components/page-content-wrapper';

const HomePage = () => {
    const [areGifsSaved, setAreGifsSaved] = useState(false);
    const gifsStorage = sessionStorage.gifs ? JSON.parse(sessionStorage.gifs) : [];

    useEffect(() => {
        !areGifsSaved &&
            !sessionStorage.gifs &&
            fetch(GFY_TRENTING_QS)
                .then((response) => response.json())
                .then((data) => {
                    sessionStorage.setItem('gifs', JSON.stringify(data.gfycats));
                    setAreGifsSaved(true);
                })
                .catch((err) => err);
    }, []);

    return (
        <PageContentWrapper
            gifs={gifsStorage}
            pageTitle={'Latest trending reactions...'}
            dataId="home-page"
        />
    );
};

export default HomePage;

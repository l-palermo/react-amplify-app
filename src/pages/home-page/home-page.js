import React, { useEffect, useState } from 'react';

import { GFY_TRENTING_QS } from './constants';
import PageContentWrapper from '../shared-components/page-content-wrapper';

const HomePage = () => {
    const [pageStatus, setPageStatus] = useState({ areGifsSaved: false, hasHelpfulMessage: false });
    const gifsStorage = sessionStorage.gifs ? JSON.parse(sessionStorage.gifs) : [];

    useEffect(() => {
        !pageStatus.areGifsSaved &&
            !sessionStorage.gifs &&
            fetch(GFY_TRENTING_QS)
                .then((response) => response.json())
                .then((data) => {
                    if (data.gfycats.length === 0)
                        return setPageStatus({ areGifsSaved: false, hasHelpfulMessage: true });
                    sessionStorage.setItem('gifs', JSON.stringify(data.gfycats));
                    setPageStatus({ areGifsSaved: true, hasHelpfulMessage: false });
                })
                .catch((err) => err);
    }, []);

    return (
        <PageContentWrapper
            gifs={gifsStorage}
            pageTitle={'Latest trending reactions...'}
            hasHelpfulMessage={pageStatus.hasHelpfulMessage}
            helpfulMessage="Oooops.. there must be a problem with the service. Try again later.."
            dataId="home-page"
        />
    );
};

export default HomePage;

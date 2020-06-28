import React, { useEffect, useState, useContext } from 'react';

import Container from '../../components/container';
import CardsLayout from '../../components/cards-layout';
import CardWithHeader from '../shared-components/card-with-header';
import { UserContext } from '../../helpers/user-context/user-context';
import { GFYCATS_SEARCH_QS, GFY_RESULT_COUNT } from './constants';

const SearchResultPage = () => {
    const [gifs, setGifs] = useState([]);
    const { searchValue } = useContext(UserContext);

    useEffect(() => {
        searchValue &&
            fetch(GFYCATS_SEARCH_QS + searchValue + GFY_RESULT_COUNT)
                .then((response) => response.json())
                .then((data) => {
                    setGifs(data.gfycats);
                })
                .catch((err) => err);
    }, [searchValue]);

    return (
        <Container dataId="search-result-page">
            <CardsLayout dataId="search-result-cards-layout">
                {gifs.map((gif) => {
                    const { gifUrl, gfyName, gfyId, title } = gif;
                    return (
                        <CardWithHeader
                            isAdd
                            key={gfyId}
                            imageUrl={gifUrl}
                            title={title}
                            imageAlt={gfyName}
                        />
                    );
                })}
            </CardsLayout>
        </Container>
    );
};

export default SearchResultPage;

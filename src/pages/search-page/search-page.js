import React, { useEffect, useState, useContext } from 'react';

import { UserContext } from '../../helpers/user-context/user-context';
import { GFYCATS_SEARCH_QS, GFY_RESULT_COUNT } from './constants';
import PageContentWrapper from '../shared-components/page-content-wrapper';

const SearchPage = () => {
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
        <PageContentWrapper
            gifs={gifs}
            pageTitle={searchValue ? `Results for ${searchValue}...` : ''}
            dataId="search-page"
        />
    );
};

export default SearchPage;

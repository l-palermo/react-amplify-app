import React, { useEffect, useState, useContext } from 'react';

import { UserContext } from '../../helpers/user-context/user-context';
import { GFYCATS_SEARCH_QS, GFY_RESULT_COUNT } from './constants';
import PageContentWrapper from '../shared-components/page-content-wrapper';

const SearchPage = () => {
    const { searchValue } = useContext(UserContext);
    const [pageStatus, setPageStatus] = useState({ gifs: [], hasHelpfulMessage: false });

    useEffect(() => {
        searchValue &&
            fetch(GFYCATS_SEARCH_QS + searchValue + GFY_RESULT_COUNT)
                .then((response) => response.json())
                .then((data) => {
                    if (data.gfycats.length === 0)
                        return setPageStatus({ gifs: [], hasHelpfulMessage: true });
                    setPageStatus({ gifs: data.gfycats, hasHelpfulMessage: false });
                })
                .catch((err) => err);
    }, [searchValue]);

    return (
        <PageContentWrapper
            gifs={pageStatus.gifs}
            hasHelpfulMessage={pageStatus.hasHelpfulMessage}
            helpfulMessage="Oooops.. no gifs match your search. Try again.."
            pageTitle={searchValue ? `Results for ${searchValue}...` : ''}
            dataId="search-page"
        />
    );
};

export default SearchPage;

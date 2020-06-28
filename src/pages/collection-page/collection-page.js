import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Container from '../../components/container';
import CardsLayout from '../../components/cards-layout';
import CardWithHeader from '../shared-components/card-with-header';
import { gifsList } from './lib/queries/gif-queries';

const CollectionPage = ({ collectionId }) => {
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        gifsList(collectionId).then((data) => setGifs(data));
    }, [collectionId]);

    return (
        <Container dataId="collection-page">
            <CardsLayout dataId="home-page-cards-layout">
                {gifs.map(({ gifUrl, gifName, id, title }) => {
                    return (
                        <CardWithHeader
                            dataId="collection-card-with-header"
                            isDelete
                            key={id}
                            gifId={id}
                            imageUrl={gifUrl}
                            imageAlt={gifName}
                            title={title}
                            onDelete={() => gifsList(collectionId).then((data) => setGifs(data))}
                        />
                    );
                })}
            </CardsLayout>
        </Container>
    );
};

CollectionPage.propTypes = {
    collectionId: PropTypes.string.isRequired,
};

export default CollectionPage;

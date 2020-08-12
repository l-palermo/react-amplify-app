import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Container from '../../components/container';
import CardsLayout from '../../components/cards-layout';
import Text from '../../components/text';
import CardWithHeader from '../shared-components/card-with-header';
import { gifsList } from './lib/queries/gif-queries';

const CollectionPage = ({ collectionId, collectionName }) => {
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        gifsList(collectionId).then((data) => setGifs(data));
    }, [collectionId]);

    return (
        <Container dataId="collection-page">
            <Text dataId="collection-page-title" tag={Text.tags.H1}>{`${collectionName}...`}</Text>
            <CardsLayout dataId="collection-page-cards-layout" ariaLabel="group, gifs imagess">
                {gifs.map(({ gifUrl, gifName, id, title, copyUrl }) => {
                    return (
                        <CardWithHeader
                            dataId="collection-card-with-header"
                            isDelete
                            key={id}
                            gifId={id}
                            imageUrl={gifUrl}
                            imageAlt={gifName}
                            copyUrl={copyUrl}
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
    collectionName: PropTypes.string.isRequired,
};

export default CollectionPage;

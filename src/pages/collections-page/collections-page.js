import React, { useEffect, useState } from 'react';

import styles from './collections-page.module.css';
import Container from '../../components/container';
import Text from '../../components/text';
import {
    collectionList,
    collectionCreate,
    collectionDelete,
} from './lib/queries/collection-queries';
import CollectionsHeader from './components/collections-header';
import CollectionCardWithHeader from './components/collection-card-with-header';

const CollectionsPage = () => {
    const [collections, setCollections] = useState([]);

    const createCollection = async (collectionName) => {
        await collectionCreate(collectionName);
        collectionList().then((data) => setCollections(data));
    };

    const onDelete = async (id) => {
        await collectionDelete(id);
        collectionList().then((data) => setCollections(data));
    };

    useEffect(() => {
        collectionList().then((data) => setCollections(data));
    }, []);

    return (
        <Container dataId="collections-page">
            <CollectionsHeader onCreateCollection={createCollection} />
            <div className={styles.textSpacing}>
                <Text dataId="collections-page-title" tag={Text.tags.H1}>
                    {'Collections...'}
                </Text>
            </div>
            <div
                className={styles.layout}
                data-qa="collections-page-cards-layout"
                aria-label="group, collection links"
            >
                {collections.map(({ id, name }) => {
                    const path = `/collections/${id}/${name}`;
                    return (
                        <CollectionCardWithHeader
                            key={id}
                            id={id}
                            name={name}
                            path={path}
                            onDelete={onDelete}
                        />
                    );
                })}
            </div>
        </Container>
    );
};

export default CollectionsPage;

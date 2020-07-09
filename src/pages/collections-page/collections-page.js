import React, { useEffect, useState } from 'react';

import styles from './collections-page.module.css';
import Container from '../../components/container';
import CollectionCard from '../../components/collection-card';
import TrashIcon from '../../assets/trash/trash.svg';
import MenuItem from '../../components/menu-item';
import Text from '../../components/text';
import {
    collectionList,
    collectionCreate,
    collectionDelete,
} from './lib/queries/collection-queries';
import CollectionsHeader from './components/collections-header';

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
            <Text tag={Text.tags.H2}>{'Collections...'}</Text>
            <div data-qa="collections-page-cards-layout" className={styles.layout}>
                {collections.map(({ id, name }) => {
                    const path = `/collections/${id}/${name}`;
                    return (
                        <CollectionCard
                            key={id}
                            path={path}
                            collectionId={id}
                            name={name}
                            headerItems={
                                <MenuItem
                                    dataId="delete-button"
                                    Icon={TrashIcon}
                                    name="Delete"
                                    isHeaderItem
                                    hasPaddingRight
                                    isInverted
                                    onClick={() => onDelete(id)}
                                />
                            }
                        />
                    );
                })}
            </div>
        </Container>
    );
};

export default CollectionsPage;

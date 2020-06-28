import React, { useEffect, useState } from 'react';

import styles from './collections-page.module.css';
import Container from '../../components/container';
import CollectionCard from '../../components/collection-card';
import AddIcon from '../../assets/add/add.svg';
import AddCollectionIcon from '../../assets/add-collection/add-collection.svg';
import TrashIcon from '../../assets/trash/trash.svg';
import MenuItem from '../../components/menu-item';
import InputField from '../../components/input-field';
import {
    collectionList,
    collectionCreate,
    collectionDelete,
} from './lib/queries/collection-queries';

const CollectionsPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [collectionName, setCollectionName] = useState('');
    const [collections, setCollections] = useState([]);

    const createCollection = async () => {
        await collectionCreate(collectionName);
        setCollectionName('');
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
            <div className={styles.collectionHeader}>
                <MenuItem
                    dataId="add-collection-button"
                    name={!isVisible ? 'add collection' : 'Close'}
                    Icon={AddCollectionIcon}
                    isAlignedLeft
                    hasPaddingRight
                    onClick={() => setIsVisible(!isVisible)}
                />
                {isVisible && (
                    <InputField
                        placeholder="Collection name..."
                        value={collectionName}
                        onChange={setCollectionName}
                        onKeyPress={(e) => e.key === 'Enter' && createCollection()}
                        ButtonIcon={
                            <MenuItem
                                dataId="arrow-close-button"
                                Icon={AddIcon}
                                name="Add"
                                hasCircle={false}
                                onClick={createCollection}
                            />
                        }
                    />
                )}
            </div>
            <div data-qa="collections-page-cards-layout" className={styles.layout}>
                {collections.map(({ id, name }) => {
                    const path = `/collections/${id}`;
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

import React, { useEffect, useState } from 'react';

import styles from './collections-page.module.css';
import Container from '../../components/container';
import CardsLayout from '../../components/cards-layout';
import CollectionCard from '../../components/collection-card';
import AddIcon from '../../assets/add/add.svg';
import AddCollectionIcon from '../../assets/add-collection/add-collection.svg';
import MenuItem from '../../components/menu-item';
import InputField from '../../components/input-field';
import {
    collectionList,
    collectionCreate,
    collectionDelete,
} from './helpers/queries/collection-queries';

// Auth.currentAuthenticatedUser().then((data) => console.log(data));

const CollectionsPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [collectionName, setCollectionName] = useState('');
    const [collections, setCollections] = useState([]);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            collectionCreate(collectionName, collectionList, setCollections);
            setCollectionName('');
        }
    };

    const handleClick = () => {
        collectionCreate(collectionName, collectionList, setCollections);
        setCollectionName('');
    };

    useEffect(() => {
        collectionList(setCollections);
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
                        onKeyPress={handleKeyPress}
                        ButtonIcon={
                            <MenuItem
                                dataId="arrow-close-button"
                                Icon={AddIcon}
                                name="Add"
                                hasCircle={false}
                                onClick={handleClick}
                            />
                        }
                    />
                )}
            </div>
            <CardsLayout dataId="collections-page-cards-layout">
                {collections.map(({ id }) => {
                    return (
                        <CollectionCard
                            key={id}
                            onClick={() => collectionDelete(id, collectionList, setCollections)}
                        />
                    );
                })}
            </CardsLayout>
        </Container>
    );
};

export default CollectionsPage;

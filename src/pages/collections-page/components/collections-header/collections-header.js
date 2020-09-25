import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './collections-header.module.css';
import AddCollectionIcon from '../../../../assets/add-collection/add-collection.svg';
import AddIcon from '../../../../assets/add/add.svg';
import MenuItem from '../../../../components/menu-item';
import InputField from '../../../../components/input-field';
import Text from '../../../../components/text';

const CollectionsHeader = ({ onCreateCollection }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [collectionName, setCollectionName] = useState('');

    return (
        <>
            <div className={styles.textSpacing}>
                <Text dataId="collections-header-title" tag={Text.tags.H1}>
                    {'Add a new collection..'}
                </Text>
            </div>
            <div className={styles.collectionsHeader}>
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
                        onChange={(e) => setCollectionName(e.target.value)}
                        onKeyPress={(e) =>
                            e.key === 'Enter' &&
                            onCreateCollection(collectionName) &&
                            setCollectionName('')
                        }
                        ButtonIcon={
                            <MenuItem
                                dataId="add-button"
                                Icon={AddIcon}
                                name="Add"
                                onClick={() => {
                                    onCreateCollection(collectionName);
                                    setCollectionName('');
                                }}
                            />
                        }
                    />
                )}
            </div>
        </>
    );
};

CollectionsHeader.propTypes = {
    onCreateCollection: PropTypes.func.isRequired,
};

export default CollectionsHeader;

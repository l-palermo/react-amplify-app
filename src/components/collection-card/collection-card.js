import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './collection-card.module.css';

const CollectionCard = ({ dataId, onClick }) => {
    const collectionName = 'reactions';
    const path = `/collection/${collectionName}`;

    return (
        <div className={styles.collectionCard} data-qa="collection-card" data-id={dataId}>
            <button data-id="delete-button" type="button" onClick={onClick}>
                {'Delete'}
            </button>
            <Link to={path}>Collection</Link>
        </div>
    );
};

CollectionCard.propTypes = {
    dataId: PropTypes.string,
    onClick: PropTypes.func,
};

CollectionCard.defaultProps = {
    dataId: '',
};

export default CollectionCard;

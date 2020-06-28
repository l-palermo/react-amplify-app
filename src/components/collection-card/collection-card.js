import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './collection-card.module.css';

const CollectionCard = ({ dataId, onClick, path, name, headerItems }) => {
    return (
        <div data-qa="collection-card" data-id={dataId}>
            <div className={styles.headerContent}>{headerItems}</div>
            <Link className={styles.link} to={path} onClick={onClick}>
                <div className={styles.name}>{name}</div>
            </Link>
        </div>
    );
};

CollectionCard.propTypes = {
    dataId: PropTypes.string,
    headerItems: PropTypes.node,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    path: PropTypes.string.isRequired,
};

CollectionCard.defaultProps = {
    dataId: '',
    headerItems: undefined,
};

export default CollectionCard;

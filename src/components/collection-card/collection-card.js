import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './collection-card.module.css';

const CollectionCard = ({ dataId, onClick, path, name, children }) => {
    return (
        <div data-qa="collection-card" data-id={dataId}>
            <div data-qa="collection-card-header" className={styles.headerContent}>
                {children}
            </div>
            <Link className={styles.link} to={path} onClick={onClick}>
                <div className={styles.name}>{name}</div>
            </Link>
        </div>
    );
};

CollectionCard.propTypes = {
    dataId: PropTypes.string,
    children: PropTypes.node,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    path: PropTypes.string.isRequired,
};

CollectionCard.defaultProps = {
    dataId: '',
    children: undefined,
};

export default CollectionCard;

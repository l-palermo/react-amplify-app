import React from 'react';
import PropTypes from 'prop-types';

import styles from './card.module.css';

const Card = ({ imageUrl, imageAlt, dataId, children, headerAriaLabel }) => (
    <div className={styles.card} data-qa="card" data-id={dataId}>
        <img className={styles.image} data-qa="card-image" src={imageUrl} alt={imageAlt} />
        <div className={styles.cardHeader} data-qa="card-header" aria-label={headerAriaLabel}>
            {children}
        </div>
    </div>
);

Card.propTypes = {
    dataId: PropTypes.string,
    children: PropTypes.node.isRequired,
    headerAriaLabel: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
};

Card.defaultProps = {
    dataId: '',
    headerAriaLabel: '',
    title: '',
};

export default Card;

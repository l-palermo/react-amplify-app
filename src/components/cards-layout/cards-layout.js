import React from 'react';
import PropTypes from 'prop-types';

import styles from './cards-layout.module.css';

const CardsLayout = ({ children, dataId, ariaLabel }) => {
    return (
        <section
            className={styles.cardsLayout}
            data-qa="page-cards-layout"
            data-id={dataId}
            aria-label={ariaLabel}
        >
            {children}
        </section>
    );
};

CardsLayout.propTypes = {
    ariaLabel: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    dataId: PropTypes.string,
};

CardsLayout.defaultProps = {
    dataId: '',
};

export default CardsLayout;

import React from 'react';
import PropTypes from 'prop-types';

import styles from './cards-layout.module.css';

const CardsLayout = ({ children, dataId }) => {
    return (
        <div className={styles.cardsLayout} data-qa="page-cards-layout" data-id={dataId}>
            {children}
        </div>
    );
};

CardsLayout.propTypes = {
    children: PropTypes.node.isRequired,
    dataId: PropTypes.string,
};

CardsLayout.defaultProps = {
    dataId: '',
};

export default CardsLayout;

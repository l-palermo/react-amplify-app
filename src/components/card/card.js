import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './card.module.css';

const Card = ({
    imageUrl,
    imageAlt,
    dataId,
    children,
    headerAriaLabel,
    onClick,
    clickConfirmationText,
}) => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsClicked(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [isClicked]);

    return (
        <div className={styles.card} data-qa="card" data-id={dataId}>
            {clickConfirmationText && isClicked && (
                <div className={styles.clickConfirmationText} data-qa="card-clicked-text">
                    {clickConfirmationText}
                </div>
            )}
            <button
                className={styles.cardButton}
                data-qa="card-button"
                onClick={() => {
                    onClick();
                    setIsClicked(true);
                }}
            >
                <img className={styles.image} data-qa="card-image" src={imageUrl} alt={imageAlt} />
            </button>
            <div className={styles.cardHeader} data-qa="card-header" aria-label={headerAriaLabel}>
                {children}
            </div>
        </div>
    );
};

Card.propTypes = {
    dataId: PropTypes.string,
    children: PropTypes.node.isRequired,
    headerAriaLabel: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    clickConfirmationText: PropTypes.string,
};

Card.defaultProps = {
    dataId: '',
    headerAriaLabel: '',
    clickConfirmationText: '',
    title: '',
};

export default Card;

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './card.module.css';
import MenuItem from '../menu-item';
import copyIcon from '../../assets/copy/copy.svg';
import checkIcon from '../../assets/check/check.svg';
import textIcon from '../../assets/title/title.svg';

const Card = ({ imageUrl, imageAlt, dataId, title }) => {
    const [isCopied, setIsCopied] = useState(false);

    const copytoClipboard = () => {
        navigator.clipboard.writeText(imageUrl);
        setIsCopied(true);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsCopied(false);
        }, 700);
        return () => clearTimeout(timer);
    }, [isCopied]);

    return (
        <div className={styles.card} data-qa="card" data-id={dataId}>
            <img className={styles.image} data-qa="card-image" src={imageUrl} alt={imageAlt} />
            <div className={styles.cardHeader}>
                <MenuItem
                    dataId="card-copy-button"
                    Icon={isCopied ? checkIcon : copyIcon}
                    onClick={copytoClipboard}
                    isHeaderItem
                />
                <MenuItem
                    dataId="card-name-button"
                    Icon={textIcon}
                    name={title}
                    isHeaderItem
                    hasMarginRight
                />
            </div>
        </div>
    );
};

Card.propTypes = {
    dataId: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    title: PropTypes.string,
};

Card.defaultProps = {
    dataId: '',
    title: '',
};

export default Card;

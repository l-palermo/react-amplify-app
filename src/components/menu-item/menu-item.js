import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './menu-item.module.css';

const MenuItem = ({
    Icon,
    onClick,
    hasPaddingRight,
    name,
    isHeaderItem,
    dataId,
    isAlignedLeft,
    isAlignedRight,
}) => {
    const [hasNameBox, setHasNameBox] = useState(false);

    const isTouchScreen = () => {
        if (navigator.maxTouchPoints > 0) return true;
        return false;
    };

    return (
        <div
            data-qa="menu-item"
            data-id={dataId}
            className={cx(styles.menuItem, {
                [styles.isOnHeader]: isHeaderItem,
                [styles.paddingRight]: hasPaddingRight,
            })}
            {...(!isTouchScreen() && {
                onMouseEnter: () => setHasNameBox(true),
                onMouseLeave: () => setHasNameBox(false),
            })}
        >
            <button
                aria-label={name}
                className={styles.button}
                type="button"
                onClick={() => {
                    if (onClick) onClick();
                    if (isTouchScreen() && isHeaderItem) setHasNameBox(!hasNameBox);
                }}
            >
                <div
                    data-qa="icon-background"
                    className={cx(styles.iconBackground, { [styles.isHeaderItem]: isHeaderItem })}
                >
                    <Icon className={styles.icon} />
                </div>
            </button>
            {hasNameBox && name && (
                <div
                    data-qa="name-box"
                    className={cx({
                        [styles.nameBox]: !isHeaderItem,
                        [styles.titleBox]: isHeaderItem,
                        [styles.alignRight]: isAlignedRight,
                        [styles.alignLeft]: isAlignedLeft,
                    })}
                >
                    <p className={styles.name}>{name}</p>
                </div>
            )}
        </div>
    );
};

MenuItem.propTypes = {
    dataId: PropTypes.string,
    hasPaddingRight: PropTypes.bool,
    isAlignedLeft: PropTypes.bool,
    isAlignedRight: PropTypes.bool,
    Icon: PropTypes.func.isRequired,
    isHeaderItem: PropTypes.bool,
    name: PropTypes.string,
    onClick: PropTypes.func,
};

MenuItem.defaultProps = {
    dataId: '',
    hasPaddingRight: false,
    isAlignedLeft: false,
    isAlignedRight: false,
    isHeaderItem: false,
    name: '',
    onClick: undefined,
};

export default MenuItem;

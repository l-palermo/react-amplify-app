import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './menu-item.module.css';

const MenuItem = ({
    Icon,
    onClick,
    hasPaddingRight,
    hasCircle,
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
                className={cx(styles.button, {
                    [styles.hasCircle]: hasCircle,
                    [styles.isHeaderItem]: isHeaderItem,
                })}
                type="button"
                onClick={() => {
                    if (onClick) onClick();
                    if (isTouchScreen() && isHeaderItem) setHasNameBox(!hasNameBox);
                }}
            >
                <Icon className={styles.icon} />
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
    hasCircle: PropTypes.bool,
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
    hasCircle: true,
    isAlignedLeft: false,
    isAlignedRight: false,
    isHeaderItem: false,
    name: '',
    onClick: undefined,
};

export default MenuItem;

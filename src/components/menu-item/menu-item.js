import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './menu-item.module.css';

const MenuItem = ({ Icon, onClick, hasMarginRight, hasCircle, name, isHeaderItem, dataId }) => {
  const [hasNameBox, setHasNameBox] = useState(false);
  return (
    <div
      data-qa="menu-item"
      data-id={dataId}
      className={styles.menuItem}
      onMouseEnter={() => setHasNameBox(true)}
      onMouseLeave={() => setHasNameBox(false)}
    >
      <button
        className={cx(styles.button, {
          [styles.marginRight]: hasMarginRight,
          [styles.hasCircle]: hasCircle,
          [styles.isHeaderItem]: isHeaderItem,
        })}
        type="button"
        onClick={onClick}
      >
        <Icon className={styles.icon} />
      </button>
      {hasNameBox && name && (
        <div
          data-qa="name-box"
          className={cx({ [styles.nameBox]: !isHeaderItem, [styles.titleBox]: isHeaderItem })}
        >
          <p className={styles.name}>{name}</p>
        </div>
      )}
    </div>
  );
};

MenuItem.propTypes = {
  dataId: PropTypes.string,
  Icon: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  name: PropTypes.string,
  hasMarginRight: PropTypes.bool,
  hasCircle: PropTypes.bool,
  isHeaderItem: PropTypes.bool,
};

MenuItem.defaultProps = {
  dataId: '',
  hasMarginRight: false,
  hasCircle: true,
  isHeaderItem: false,
  name: '',
  onClick: undefined,
};

export default MenuItem;

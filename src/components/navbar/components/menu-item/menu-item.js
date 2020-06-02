import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './menu-item.module.css';

const MenuItem = ({ Icon, onClick, hasMarginRight, hasCircle, name }) => {
  const [hasNameBox, setHasNameBox] = useState(false);
  return (
    <div data-qa="menu-item" className={styles.menuItem} onMouseEnter={() => setHasNameBox(true)} onMouseLeave={() => setHasNameBox(false)}>
      <button
        className={cx(styles.button, {
          [styles.marginRight]: hasMarginRight,
          [styles.hasCircle]: hasCircle,
        })}
        type="button"
        onClick={onClick}
      >
        <Icon className={styles.icon} />
      </button>
      {hasNameBox && (
        <div data-qa="name-box" className={styles.nameBox}>
          <p className={styles.name}>{name}</p>
        </div>
      )}
    </div>
  );
};

MenuItem.propTypes = {
  Icon: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  hasMarginRight: PropTypes.bool,
  hasCircle: PropTypes.bool,
};

MenuItem.defaultProps = {
  hasMarginRight: false,
  hasCircle: true,
};

export default MenuItem;

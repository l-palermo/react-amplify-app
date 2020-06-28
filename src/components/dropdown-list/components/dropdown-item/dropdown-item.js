import React from 'react';
import PropTypes from 'prop-types';

import styles from './dropdown-item.module.css';

const DropdownItem = ({ name, onClick }) => {
    return (
        <button
            data-qa="dropdown-item"
            className={styles.dropdownItem}
            type="button"
            onClick={onClick}
        >
            {name}
        </button>
    );
};

DropdownItem.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default DropdownItem;

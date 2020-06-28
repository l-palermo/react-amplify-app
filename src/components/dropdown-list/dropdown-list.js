import React from 'react';
import PropTypes from 'prop-types';

import styles from './dropdown-list.module.css';
import DropdownItem from './components/dropdown-item/dropdown-item';

const DropdownList = ({ children }) => {
    return (
        <div className={styles.dropdownList} data-qa="dropdown-list">
            {children}
        </div>
    );
};

DropdownList.propTypes = {
    children: PropTypes.node.isRequired,
};

DropdownList.Item = DropdownItem;

export default DropdownList;

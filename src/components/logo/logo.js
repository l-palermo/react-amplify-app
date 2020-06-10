import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './logo.module.css';

const Logo = ({ children, path, dataId }) => {
    return (
        <Link to={path} style={{ textDecoration: 'none' }}>
            <div className={styles.logo} data-qa="logo" data-id={dataId}>
                {children}
            </div>
        </Link>
    );
};

Logo.propTypes = {
    children: PropTypes.node.isRequired,
    path: PropTypes.string.isRequired,
    dataId: PropTypes.string,
};

Logo.defaultProps = {
    dataId: '',
};

export default Logo;

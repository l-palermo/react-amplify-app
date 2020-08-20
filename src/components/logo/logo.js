import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './logo.module.css';

const Logo = ({ path, dataId, text, icon }) => {
    return (
        <Link to={path} style={{ textDecoration: 'none' }}>
            <div data-qa="logo" data-id={dataId}>
                <div className={styles.logoText}>{text}</div>
                <div className={styles.logo}>{icon}</div>
            </div>
        </Link>
    );
};

Logo.propTypes = {
    path: PropTypes.string.isRequired,
    dataId: PropTypes.string,
    icon: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
};

Logo.defaultProps = {
    dataId: '',
};

export default Logo;

import React from 'react';

import styles from './loading-spinner.module.css';
import PawIcon from '../../assets/paw/paw.svg';

const LoadingSpinner = () => (
    <div data-qa="loading-spinner" className={styles.loadingSpinner}>
        <PawIcon className={styles.icon} />
    </div>
);

export default LoadingSpinner;

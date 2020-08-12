import React from 'react';
import PropTypes from 'prop-types';

import styles from './confirmation.module.css';
import ConfirmIcon from '../../assets/check/check.svg';
import DenyIcon from '../../assets/x/x.svg';

const Confirmation = ({ onConfirmClick, onDenyClick, dataId, confirmAriaLabel, denyAriaLabel }) => {
    return (
        <div
            className={styles.confirmationContainer}
            data-qa="confirmation"
            data-id={dataId}
            aria-label="group, yes or no confirmation"
        >
            <button
                data-qa="confirm-button"
                className={styles.confirmationButton}
                type="button"
                aria-label={confirmAriaLabel}
                onClick={onConfirmClick}
            >
                <ConfirmIcon className={styles.confirm} />
            </button>
            <button
                data-qa="deny-button"
                className={styles.confirmationButton}
                type="button"
                aria-label={denyAriaLabel}
                onClick={onDenyClick}
            >
                <DenyIcon className={styles.deny} />
            </button>
        </div>
    );
};

Confirmation.propTypes = {
    dataId: PropTypes.string,
    confirmAriaLabel: PropTypes.string.isRequired,
    denyAriaLabel: PropTypes.string.isRequired,
    onDenyClick: PropTypes.func.isRequired,
    onConfirmClick: PropTypes.func.isRequired,
};

Confirmation.defaultProps = {
    dataId: '',
};

export default Confirmation;

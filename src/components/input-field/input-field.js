import React from 'react';
import PropTypes from 'prop-types';

import styles from './input-field.module.css';

const InputField = ({ dataId, ButtonIcon, placeholder, value, onChange, onKeyPress }) => {
    return (
        <div className={styles.inputField} data-qa="input-field" data-id={dataId}>
            <input
                className={styles.input}
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                onKeyPress={(e) => onKeyPress(e)}
            />
            {ButtonIcon}
        </div>
    );
};

InputField.propTypes = {
    ButtonIcon: PropTypes.node,
    dataId: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onKeyPress: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

InputField.defaultProps = {
    ButtonIcon: undefined,
    dataId: '',
};

export default InputField;

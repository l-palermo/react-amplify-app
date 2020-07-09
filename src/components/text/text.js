import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './text.module.css';
import { tags, sizes, weights } from './constants';

const Text = ({ children, tag, size, weight, dataId }) => {
    const TextTag = tag;
    return (
        <TextTag
            className={cx(styles.colour, styles[size], styles[weight])}
            data-qa="text"
            data-id={dataId}
        >
            {children}
        </TextTag>
    );
};

Text.tags = tags;
Text.sizes = sizes;
Text.weights = weights;

Text.propTypes = {
    children: PropTypes.string.isRequired,
    dataId: PropTypes.string,
    size: PropTypes.string,
    tag: PropTypes.string,
    weight: PropTypes.string,
};

Text.defaultProps = {
    dataId: '',
    tag: 'div',
    size: 'M',
    weight: 'MEDIUM',
};

export default Text;

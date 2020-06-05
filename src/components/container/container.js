import React from 'react';
import PropTypes from 'prop-types';

import styles from './container.module.css';

const Container = ({ children, dataId }) => {
  // add padding prop
  return (
    <div className={styles.container} data-qa="container" data-id={dataId}>
      <div data-qa="container-children" className={styles.children}>
        {children}
      </div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  dataId: PropTypes.string,
};

Container.defaultProps = {
  dataId: '',
};

export default Container;

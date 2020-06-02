import React from 'react';
import PropTypes from 'prop-types';

import styles from './container.module.css';

const Container = ({ children }) => {
  // add padding prop
  return (
    <div data-qa="container" className={styles.container}>
      <div data-qa="container-children" className={styles.children}>
        {children}
      </div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;

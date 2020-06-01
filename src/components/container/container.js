import React from "react";
import PropTypes from "prop-types";

import styles from "./container.module.css";

const Container = ({ children }) => {
  // add padding prop
  return (
    <div className={styles.container}>
      <div className={styles.children}>{children}</div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;

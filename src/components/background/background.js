import React from "react";
import PropTypes from "prop-types";

import styles from "./background.module.css";

const Background = ({ children }) => {
  return <div className={styles.background}>{children}</div>;
};

Background.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Background;

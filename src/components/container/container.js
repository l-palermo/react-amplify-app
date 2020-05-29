import React from "react";

import "./container.css";

const Container = ({ children }) => {
  // add padding prop
  return (
    <div className="container">
      <div className="children">{children}</div>
    </div>
  );
};

export default Container;

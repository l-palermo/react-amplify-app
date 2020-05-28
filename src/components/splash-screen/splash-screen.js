import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./splash-screen.css";

const SplashScreen = ({ duration }) => {
  const [isRendered, setIsRendered] = useState(true);
  const fadeInDuration = duration * 0.7;
  const fadeOutDuration = duration * 0.3;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRendered(false);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return isRendered ? (
    <div
      className="splashScreen"
      style={{
        animation: `splashFadeIn ${fadeInDuration}ms ease forwards, splashFadeOut ${fadeOutDuration}ms ease`,
        animationDelay: `0ms, ${fadeInDuration}ms`,
      }}
    >
      <h1 className="splashScreenText">CATURDAY</h1>
    </div>
  ) : null;
};

SplashScreen.propTypes = {
  duration: PropTypes.number,
};

SplashScreen.defaultProps = {
  duration: 2500,
};

export default SplashScreen;

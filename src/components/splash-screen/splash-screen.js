import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './splash-screen.module.css';

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
      data-qa="splash-screen"
      className={styles.splashScreen}
      style={{
        animation: `splashFadeIn ${fadeInDuration}ms ease forwards, splashFadeOut ${fadeOutDuration}ms ease`,
        animationDelay: `0ms, ${fadeInDuration}ms`,
      }}
    >
      <h1 data-qa="splash-screen-logo" className={styles.splashScreenLogo}>CATURDAY</h1>
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

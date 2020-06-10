import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './splash-screen.css';

const SplashScreen = ({ duration }) => {
    const [isRendered, setIsRendered] = useState(true);
    const fadeInDuration = duration * 0.7;
    const fadeOutDuration = duration * 0.4;
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsRendered(false);
        }, duration);
        return () => clearTimeout(timer);
    }, []);

    return isRendered ? (
        <div
            data-qa="splash-screen"
            className="splashScreen"
            style={{
                animation: `splashFadeIn ${fadeInDuration}ms ease forwards, splashFadeOut ${fadeOutDuration}ms`,
                animationDelay: `0ms, ${fadeInDuration}ms`,
            }}
        >
            <h1 data-qa="splash-screen-logo" className="splashScreenLogo">
                CATURDAY
            </h1>
        </div>
    ) : null;
};

SplashScreen.propTypes = {
    duration: PropTypes.number,
};

SplashScreen.defaultProps = {
    duration: 3000,
};

export default SplashScreen;

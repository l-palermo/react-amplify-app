import React from 'react';
import { act } from 'react-dom/test-utils';

import SplashScreen from '.';

const setupTest = (props) => mount(<SplashScreen {...props} />);

describe('SplashScreen', () => {
  afterEach(() => {
    jest.clearAllTimers();
    jest.useFakeTimers();
  });

  it('should render', () => {
    const wrapper = setupTest();
    expect(wrapper.find('[data-qa="splash-screen"]')).toHaveClassName('splashScreen');
  });
  it('should have the correct animation frames', () => {
    const wrapper = setupTest();
    const style = {
      animation: 'splashFadeIn 1750ms ease forwards, splashFadeOut 750ms ease',
      animationDelay: '0ms, 1750ms',
    };
    expect(wrapper.find('[data-qa="splash-screen"]')).toHaveProp('style', style);
  });
  it('should disappear when the timeout tick', () => {
    const wrapper = setupTest();

    act(() => {
      jest.advanceTimersByTime(SplashScreen.defaultProps.duration);
    });

    wrapper.update();
    expect(wrapper.find('[data-qa="splash-screen"]')).toHaveLength(0);
    wrapper.unmount();
  });
});

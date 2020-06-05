import React from 'react';

import App from './app';

const setupTest = () => mount(<App />);

describe('App', () => {
  it('should render a splash screen', () => {
    const wrapper = setupTest();
    expect(wrapper.find('[data-qa="splash-screen"]')).toHaveLength(1);
  });
  it('should render the Amplify authenticator', () => {
    const wrapper = setupTest();
    expect(wrapper.find('AmplifyAuthenticator')).toHaveLength(1);
  });
  it('should render the the background', () => {
    const wrapper = setupTest();
    expect(wrapper.find('AmplifyAuthenticator [data-qa="background"]')).toHaveLength(1);
  });
  it('should render a navbar', () => {
    const wrapper = setupTest();
    expect(wrapper.find('[data-qa="background"] [data-qa="navbar"]')).toHaveLength(1);
  });
  it('should render the home page', () => {
    const wrapper = setupTest();
    expect(wrapper.find('[data-qa="home-page"]')).toHaveLength(1);
  });
});

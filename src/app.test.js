import React from 'react';

import App from './app';

const setupTest = () => mount(<App />);

describe('App', () => {
    it('should render a splash screen', () => {
        const wrapper = setupTest();
        expect(wrapper.find('[data-qa="splash-screen"]')).toHaveLength(1);
    });
    it('should render the the background', () => {
        const wrapper = setupTest();
        expect(wrapper.find('[data-qa="background"]')).toHaveLength(1);
    });
    it('should render a navbar', () => {
        const wrapper = setupTest();
        expect(wrapper.find('[data-qa="background"] [data-qa="navbar"]')).toHaveLength(1);
    });
    it('should render the home page', () => {
        const wrapper = setupTest();
        expect(wrapper.find('[data-qa="home-page"]')).toHaveLength(1);
    });
    it('should render the search result page', () => {
        const wrapper = setupTest();
        const searchButton = wrapper.find('[data-id="search-button"]');

        searchButton.find('button').simulate('click');

        const searchInput = wrapper.find('[data-qa="search-input"] input');

        searchInput.simulate('change', { target: { value: 'this is a test' } });
        searchInput.simulate('keypress', { key: 'Enter' });

        expect(wrapper.find('[data-id="search-result-page"]')).toHaveLength(1);
    });
});

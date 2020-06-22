import React from 'react';
import { act } from 'react-dom/test-utils';

import App from './app';

jest.mock('../__mocks__/@aws-amplify/api');

const setupTest = () => mount(<App />);

const setSessionStorage = (bool) => (global.sessionStorage.wasPlayed = JSON.stringify(bool));

describe('App', () => {
    beforeEach(() => {
        setSessionStorage(false);
    });

    it('should render a splash screen only when user first log in', () => {
        const wrapper = setupTest();
        expect(wrapper.find('[data-qa="splash-screen"]')).toHaveLength(1);
    });
    it('should not render the splash screen if the user refresh the page', () => {
        setSessionStorage(true);
        const wrapper = setupTest();
        expect(wrapper.find('[data-qa="splash-screen"]')).toHaveLength(0);
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

        const searchInput = wrapper.find('[data-qa="input-field"] input');

        searchInput.simulate('change', { target: { value: 'this is a test' } });
        searchInput.simulate('keypress', { key: 'Enter' });

        expect(wrapper.find('[data-id="search-result-page"]')).toHaveLength(1);
    });
    it('should render the collection page', async () => {
        const wrapper = setupTest();
        const collectionButton = wrapper.find('[data-id="collection-button"]');

        await act(async () => collectionButton.find('button').simulate('click'));
        wrapper.update();

        expect(wrapper.find('[data-id="collections-page"]')).toHaveLength(1);
    });
});

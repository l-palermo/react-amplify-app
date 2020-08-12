import React from 'react';
import { act } from 'react-dom/test-utils';

import SearchPage from '.';
import { UserContext } from '../../helpers/user-context/user-context';

const data = [
    {
        webpUrl: 'https://banana.com',
        gfyName: 'test',
        gfyId: 'test id',
        title: 'test',
        max2mbGif: 'url',
    },
    {
        webpUrl: 'https://gif.com',
        gfyName: 'test next',
        gfyId: 'test ide',
        title: 'test',
        max2mbGif: 'url',
    },
];

global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
        json: () => ({
            gfycats: data,
        }),
    })
);

const setupTest = (searchValue) =>
    mount(
        <UserContext.Provider value={searchValue}>
            <SearchPage />
        </UserContext.Provider>
    );

describe('Search result page', () => {
    afterEach(() => {
        jest.resetAllMocks();
    });
    it('render the page correctly', async () => {
        let wrapper;

        await act(async () => {
            wrapper = setupTest({ searchValue: 'test' });
        });
        wrapper.update();

        expect(wrapper.find('Container [data-id="search-page"]')).toHaveLength(1);
        expect(wrapper.find('CardsLayout [data-id="search-page-cards-layout"]')).toHaveLength(1);
        expect(wrapper.find('CardsLayout [className="card"]')).toHaveLength(2);

        wrapper.find('CardsLayout [className="card"]').forEach((item) => {
            expect(item.find('img')).toHaveProp('alt', 'gif');
        });
    });

    it('should render the last search gifs if page refresh', () => {
        const wrapper = setupTest({ searchValue: '' });
        expect(wrapper.find('CardsLayout [className="card"]')).toHaveLength(0);
    });
});

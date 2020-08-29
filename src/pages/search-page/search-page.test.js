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

window.IntersectionObserver = jest.fn().mockImplementation((callback) => {
    const entries = [{ isIntersecting: true }, { isIntersecting: false }];
    callback(entries);
    return {
        observe: () => {},
        unobserve: () => {},
        disconnect: () => {},
    };
});

const mockFetch = jest.fn().mockImplementation(
    (payload) =>
        (global.fetch = () =>
            Promise.resolve({
                json: () => ({
                    gfycats: payload,
                }),
            }))
);

const setupTest = (searchValue) =>
    mount(
        <UserContext.Provider value={searchValue}>
            <SearchPage />
        </UserContext.Provider>
    );

describe('Search result page', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('render the page correctly', async () => {
        mockFetch(data);

        let wrapper;

        await act(async () => {
            wrapper = await setupTest({ searchValue: 'test' });
        });
        wrapper.update();

        expect(wrapper.find('Container [data-id="search-page"]')).toHaveLength(1);
        expect(wrapper.find('CardsLayout [data-id="search-page-cards-layout"]')).toHaveLength(1);
        expect(wrapper.find('CardsLayout [className="card"]')).toHaveLength(2);

        wrapper.find('CardsLayout [className="card"]').forEach((item) => {
            expect(item.find('img')).toHaveProp('alt', 'gif');
        });
    });
    it("should render the an helpful message if the search doesn't return any gif", async () => {
        mockFetch([]);

        let wrapper;

        await act(async () => {
            wrapper = setupTest({ searchValue: 'test' });
        });
        wrapper.update();

        expect(wrapper.find('Container [data-id="search-page"]')).toHaveLength(1);
        expect(wrapper.find('CardsLayout [data-id="search-page-cards-layout"]')).toHaveLength(1);
        expect(wrapper.find('CardsLayout [data-id="search-page-cards-layout"]')).toHaveText(
            'Oooops.. no gifs match your search. Try again..'
        );
    });
});

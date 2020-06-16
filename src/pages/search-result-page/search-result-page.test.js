import React from 'react';
import { act } from 'react-dom/test-utils';

import SearchResultPage from './search-result-page';
import { UserContext } from '../../helpers/user-context/user-context';

const data = [
    { gifUrl: 'https://banana.com', gfyName: 'test', gfyId: 'test id' },
    { gifUrl: 'https://gif.com', gfyName: 'test next', gfyId: 'test ide' },
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
            <SearchResultPage />
        </UserContext.Provider>
    );

describe('Search result page', () => {
    beforeEach(() => {
        global.sessionStorage.lastSearch = JSON.stringify(data);
        global.sessionStorage.setItem = jest.fn();
    });

    it('render the page correctly', async () => {
        let wrapper;

        await act(async () => {
            wrapper = setupTest({ searchValue: 'test' });
        });
        wrapper.update();

        expect(wrapper.find('Container [data-id="search-result-page"]')).toHaveLength(1);
        expect(wrapper.find('CardsLayout [data-id="search-result-cards-layout"]')).toHaveLength(1);
        expect(wrapper.find('CardsLayout [className="card"]')).toHaveLength(2);

        wrapper.find('CardsLayout [className="card"]').forEach((item, index) => {
            expect(item.find('img')).toHaveProp('alt', data[index].gfyName);
        });
    });

    it('should render the last search gifs if page refresh', () => {
        const wrapper = setupTest({ searchValue: '' });
        expect(wrapper.find('CardsLayout [className="card"]')).toHaveLength(2);
    });
});

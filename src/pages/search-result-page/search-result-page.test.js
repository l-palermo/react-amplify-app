import React from 'react';
import { act } from 'react-dom/test-utils';

import SearchResultPage from './search-result-page';
import { UserContextProvider } from '../../helpers/user-context/user-context';

global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
        json: () => ({
            gfycats: [
                { gifUrl: 'https://banana.com', gfyName: 'test', gfyId: 'test id' },
                { gifUrl: 'https://gif.com', gfyName: 'test next', gfyId: 'test ide' },
            ],
        }),
    })
);

const setupTest = () =>
    mount(
        <UserContextProvider value={{ searchValue: 'test' }}>
            <SearchResultPage />
        </UserContextProvider>
    );

describe('Search result page', () => {
    it('render the page correctly', async () => {
        let wrapper;

        await act(async () => {
            wrapper = setupTest();
        });
        wrapper.update();

        expect(wrapper.find('Container [data-id="search-result-page"]')).toHaveLength(1);
        expect(wrapper.find('CardsLayout [data-id="search-result-cards-layout"]')).toHaveLength(1);
        expect(wrapper.find('CardsLayout [className="card"]')).toHaveLength(2);
    });
});

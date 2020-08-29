import React from 'react';
import { act } from 'react-dom/test-utils';

import HomePage from '.';
import { UserContextProvider } from '../../helpers/user-context/user-context';

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

// global.fetch = jest.fn().mockImplementation(() =>
//     Promise.resolve({
//         json: () => ({
//             gfycats: data,
//         }),
//     })
// );

const mockFetch = jest.fn().mockImplementation(
    (payload) =>
        (global.fetch = () =>
            Promise.resolve({
                json: () => ({
                    gfycats: payload,
                }),
            }))
);

const setupTest = () =>
    mount(
        <UserContextProvider>
            <HomePage />
        </UserContextProvider>
    );

describe('HomePage', () => {
    afterEach(() => {
        jest.clearAllMocks();
        sessionStorage.clear();
    });
    it('should render', async () => {
        mockFetch(data);
        let wrapper;

        await act(async () => {
            wrapper = setupTest();
        });
        wrapper.update();

        expect(wrapper.find('[data-id="home-page"]')).toHaveLength(1);
        expect(wrapper.find('CardsLayout [data-id="home-page-cards-layout"]')).toHaveLength(1);
        expect(wrapper.find('CardsLayout [data-id="home-page-card-with-header"]')).toHaveLength(2);
    });
    it("should render the an helpful message if the fetch doesn't return any gif", async () => {
        mockFetch([]);
        let wrapper;

        await act(async () => {
            wrapper = setupTest();
        });
        wrapper.update();

        expect(wrapper.find('Container [data-id="home-page"]')).toHaveLength(1);
        expect(wrapper.find('CardsLayout [data-id="home-page-cards-layout"]')).toHaveLength(1);
        expect(wrapper.find('CardsLayout [data-id="home-page-cards-layout"]')).toHaveText(
            'Oooops.. there must be a problem with the service. Try again later..'
        );
    });
});

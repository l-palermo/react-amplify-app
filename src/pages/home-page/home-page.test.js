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
        gif100px: 'url',
    },
    {
        webpUrl: 'https://gif.com',
        gfyName: 'test next',
        gfyId: 'test ide',
        title: 'test',
        gif100px: 'url',
    },
];

global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
        json: () => ({
            gfycats: data,
        }),
    })
);

const setupTest = () =>
    mount(
        <UserContextProvider>
            <HomePage />
        </UserContextProvider>
    );

describe('HomePage', () => {
    afterEach(() => {
        jest.resetAllMocks();
    });
    it('should render', async () => {
        let wrapper;

        await act(async () => {
            wrapper = setupTest();
        });
        wrapper.update();

        expect(wrapper.find('[data-id="home-page"]')).toHaveLength(1);
        expect(wrapper.find('CardsLayout [data-id="home-page-cards-layout"]')).toHaveLength(1);
        expect(wrapper.find('CardsLayout [data-id="home-page-card-with-header"]')).toHaveLength(2);
    });
});

import React from 'react';
import { act } from 'react-dom/test-utils';

import CollectionPage from '.';

// jest.mock('./lib/queries/gif-queries');

const requiredProps = {
    collectionId: 'test',
};

const setupTest = () => mount(<CollectionPage {...requiredProps} />);

describe('collection page', () => {
    it('should render the page correctly', async () => {
        let wrapper;
        await act(async () => (wrapper = setupTest()));
        wrapper.update();

        expect(wrapper.find('[data-id="collection-page"]')).toHaveLength(1);
    });
    it('should render the correct number of cards', async () => {
        let wrapper;
        await act(async () => (wrapper = setupTest()));
        wrapper.update();

        expect(wrapper.find('[data-id="collection-card-with-header"]')).toHaveLength(1);
    });
    it('should delete the card when the delete button is clicked', async () => {
        let wrapper;
        await act(async () => (wrapper = setupTest()));
        wrapper.update();

        const card = wrapper.find('[data-id="collection-card-with-header"]');

        const button = card.find('[data-id="delete-from-collection"] button');

        await act(async () => button.simulate('click'));

        expect(wrapper.find('[data-id="collection-card-with-header"]')).toHaveLength(1);
    });
});

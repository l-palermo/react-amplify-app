import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import CollectionCardWithHeader from '.';

const requiredProps = {
    id: 'test-id',
    path: 'test-path',
    name: 'test',
    onDelete: jest.fn(),
};
const setupTest = () =>
    mount(
        <MemoryRouter>
            <CollectionCardWithHeader {...requiredProps} />
        </MemoryRouter>
    );

describe('CollectionCardWithHeader', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('should render a collection card', () => {
        const wrapper = setupTest();
        expect(wrapper.find('[data-qa="collection-card"]')).toHaveLength(1);
    });
    it('should render a menu item set for delete action', () => {
        const wrapper = setupTest();
        const menuItem = wrapper.find('[data-qa="collection-card"] [data-id="delete-button"]');
        expect(menuItem).toHaveLength(1);
    });
    it('should render the confirmation component when clicked', () => {
        const wrapper = setupTest();
        const button = wrapper.find('[data-id="delete-button"] button');

        button.simulate('click');

        expect(wrapper.find('[data-qa="confirmation"]')).toHaveLength(1);
    });
    it('should render the confirmation component with the correct aria label per button', () => {
        const wrapper = setupTest();
        const button = wrapper.find('[data-id="delete-button"] button');

        button.simulate('click');

        expect(wrapper.find('[data-qa="confirm-button"]')).toHaveProp('aria-label', 'Yes');
        expect(wrapper.find('[data-qa="deny-button"]')).toHaveProp('aria-label', 'No');
    });
    it('should fire the onDelete function when confirm is clicked and unmount confirmation', () => {
        const wrapper = setupTest();
        const button = wrapper.find('[data-id="delete-button"] button');

        button.simulate('click');

        const confirmation = wrapper.find('[data-qa="confirmation"]');

        confirmation.find('[data-qa="confirm-button"]').simulate('click');
        expect(requiredProps.onDelete).toHaveBeenCalledWith(requiredProps.id);

        expect(wrapper.find('[data-qa="confirmation"]')).toHaveLength(0);
    });
    it('should not fire the onDelete function when deny is clicked and unmount confirmation', () => {
        const wrapper = setupTest();
        const button = wrapper.find('[data-id="delete-button"] button');

        button.simulate('click');

        const confirmation = wrapper.find('[data-qa="confirmation"]');

        confirmation.find('[data-qa="deny-button"]').simulate('click');
        expect(requiredProps.onDelete).not.toHaveBeenCalled();

        expect(wrapper.find('[data-qa="confirmation"]')).toHaveLength(0);
    });
    it('should unmount confirmation if delete button is clicked twice', () => {
        const wrapper = setupTest();
        const button = wrapper.find('[data-id="delete-button"] button');

        button.simulate('click');

        expect(wrapper.find('[data-qa="confirmation"]')).toHaveLength(1);

        button.simulate('click');

        expect(wrapper.find('[data-qa="confirmation"]')).toHaveLength(0);
    });
});

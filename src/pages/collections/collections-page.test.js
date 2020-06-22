import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

import CollectionsPage from './collections-page';

jest.mock('../../../__mocks__/@aws-amplify/api');

const setupTest = () =>
    mount(
        <MemoryRouter>
            <CollectionsPage />
        </MemoryRouter>
    );

describe('Collection page', () => {
    it('renders the collections page container', async () => {
        let wrapper;
        await act(async () => (wrapper = setupTest()));
        wrapper.update();

        expect(wrapper.find('[data-id="collections-page"]')).toHaveLength(1);
    });
    it('should render the add collection button', async () => {
        let wrapper;
        await act(async () => (wrapper = setupTest()));
        wrapper.update();
        expect(wrapper.find('[data-id="add-collection-button"]')).toHaveLength(1);
    });
    it('should render the colletions correctly', async () => {
        let wrapper;
        await act(async () => (wrapper = setupTest()));
        wrapper.update();

        expect(wrapper.find('[data-qa="collection-card"]')).toHaveLength(2);
    });
    describe('Actions', () => {
        it('should render the input field when add collection button is clicked', async () => {
            let wrapper;
            await act(async () => (wrapper = setupTest()));
            wrapper.update();

            const button = wrapper.find('[data-id="add-collection-button"] button');
            button.simulate('click');

            expect(wrapper.find('[data-qa="input-field"]')).toHaveLength(1);
        });
        it('should allow the user to add a collection using the enter key', async () => {
            let wrapper;
            await act(async () => (wrapper = setupTest()));
            wrapper.update();

            const button = wrapper.find('[data-id="add-collection-button"] button');
            button.simulate('click');

            const input = wrapper.find('[data-qa="input-field"] input');

            input.simulate('change', { target: { value: 'this is a test' } });
            await act(async () => input.simulate('keypress', { key: 'Enter' }));
            wrapper.update();

            // mock the data base
        });
        it('shoudl not add a collection if a different key other than enter is pressed', async () => {
            let wrapper;
            await act(async () => (wrapper = setupTest()));
            wrapper.update();

            const button = wrapper.find('[data-id="add-collection-button"] button');
            button.simulate('click');

            const input = wrapper.find('[data-qa="input-field"] input');
            await act(async () => input.simulate('keypress', { key: 'ArrowDown' }));
            wrapper.update();

            expect(wrapper.find('[data-qa="collection-card"]')).toHaveLength(2);
        });
        it('should allow the user to add a collection using the add button', async () => {
            let wrapper;
            await act(async () => (wrapper = setupTest()));
            wrapper.update();

            const button = wrapper.find('[data-id="add-collection-button"] button');
            button.simulate('click');

            const input = wrapper.find('[data-qa="input-field"] input');

            input.simulate('change', { target: { value: 'this is a test' } });
            await act(async () => wrapper.find('[data-qa="input-field"] button').simulate('click'));
            wrapper.update();

            // mock the data base
        });
        it('should allow the user to delete a collection', async () => {
            let wrapper;
            await act(async () => (wrapper = setupTest()));
            wrapper.update();

            const card = wrapper.find('[data-qa="collection-card"]').at(0);
            const button = card.find('[data-id="delete-button"]');
            await act(async () => button.simulate('click'));
            wrapper.update();

            // mock the data base
        });
    });
});

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

import CollectionsPage from './collections-page';

const setupTest = () =>
    mount(
        <MemoryRouter>
            <CollectionsPage />
        </MemoryRouter>
    );

describe('Collection page', () => {
    it('should render the collections page container', async () => {
        let wrapper;
        await act(async () => (wrapper = setupTest()));
        wrapper.update();

        expect(wrapper.find('[data-id="collections-page"]')).toHaveLength(1);
    });
    it('should render the collections link group with an aria label attribute for accessibility', async () => {
        let wrapper;
        await act(async () => (wrapper = setupTest()));
        wrapper.update();

        expect(wrapper.find('[data-qa="collections-page-cards-layout"]')).toHaveProp(
            'aria-label',
            'group, collection links'
        );
    });
    it('should render the "add collection" button', async () => {
        let wrapper;
        await act(async () => (wrapper = setupTest()));
        wrapper.update();
        expect(wrapper.find('[data-id="add-collection-button"]')).toHaveLength(1);
    });
    it('should render the page title correctly', async () => {
        let wrapper;
        await act(async () => (wrapper = setupTest()));
        wrapper.update();

        expect(wrapper.find('h1[data-id="collections-page-title"]')).toHaveLength(1);
    });
    it('should render the collections correctly', async () => {
        let wrapper;
        await act(async () => (wrapper = setupTest()));
        wrapper.update();

        expect(wrapper.find('[data-qa="collection-card"]')).toHaveLength(2);
    });
    describe('Actions', () => {
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

            // mock the database
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
            const button = card.find('[data-id="delete-button"] button');

            button.simulate('click');

            const confirmButton = wrapper.find(
                '[data-qa="confirmation"] [data-qa="confirm-button"]'
            );

            await act(async () => confirmButton.simulate('click'));
            wrapper.update();

            // mock the data base
        });
    });
});

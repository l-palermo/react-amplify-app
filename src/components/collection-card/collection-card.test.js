import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import CollectionCard from './collection-card';

const setupTest = (props) =>
    mount(
        <MemoryRouter>
            <CollectionCard {...props} />
        </MemoryRouter>
    );

describe('Collection card', () => {
    it('should render a collection card', () => {
        const wrapper = setupTest();
        expect(wrapper.find('[data-qa="collection-card"]')).toHaveLength(1);
    });
    it('should render a detele button', () => {
        const wrapper = setupTest();
        expect(wrapper.find('[data-id="delete-button"]')).toHaveLength(1);
    });
    it('should render a link to the collection page', () => {
        const wrapper = setupTest();
        expect(wrapper.find('Link')).toHaveLength(1);
    });
    it('should call the passed function onClick', () => {
        const mockfunction = { onClick: jest.fn() };
        const wrapper = setupTest(mockfunction);
        wrapper.find('button').simulate('click');
        expect(mockfunction.onClick).toHaveBeenCalled();
    });
});

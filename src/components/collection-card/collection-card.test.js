import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import CollectionCard from './collection-card';

const requiredProps = {
    name: 'test-1',
    path: '/path',
};

const setupTest = (props) =>
    mount(
        <MemoryRouter>
            <CollectionCard {...props} {...requiredProps} />
        </MemoryRouter>
    );

describe('Collection card', () => {
    it('should render a collection card', () => {
        const wrapper = setupTest();
        expect(wrapper.find('[data-qa="collection-card"]')).toHaveLength(1);
    });
    it('should render a link to the collection page', () => {
        const wrapper = setupTest();
        expect(wrapper.find('Link')).toHaveLength(1);

        // test memory router
    });
    it('should call the passed function onClick', () => {
        const mockfunction = { onClick: jest.fn() };
        const wrapper = setupTest(mockfunction);
        wrapper.find('a').simulate('click', { button: 0 });
        expect(mockfunction.onClick).toHaveBeenCalled();
    });
    it('should render the header items correctly', () => {
        const props = { children: [<div key={1} />, <div key={2} />] };
        const wrapper = setupTest(props);

        expect(wrapper.find('[data-qa="collection-card-header"]').children()).toHaveLength(2);
    });
});

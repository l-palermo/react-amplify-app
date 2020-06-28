import React from 'react';

import DropdownList from '.';

const items = [
    { name: 'test-1', onClick: jest.fn() },
    { name: 'test-2', onClick: jest.fn() },
];

const setupTest = () =>
    mount(
        <DropdownList>
            {items.map(({ name, onClick }) => (
                <DropdownList.Item key={name} name={name} onClick={onClick} />
            ))}
        </DropdownList>
    );

describe('Dropdown list', () => {
    it('should render the list correctly', () => {
        const wrapper = setupTest();
        expect(wrapper.find('[data-qa="dropdown-list"]')).toHaveLength(1);
    });
    it('should render the correct number of items', () => {
        const wrapper = setupTest();
        expect(wrapper.find('[data-qa="dropdown-item"]')).toHaveLength(2);
    });
});

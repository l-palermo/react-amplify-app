import React from 'react';

import DropdownItem from '.';

const requiredProps = {
    name: 'test-1',
    onClick: jest.fn(),
};

const setupTest = () => mount(<DropdownItem {...requiredProps} />);

describe('Dropdown item', () => {
    it('should render correctly', () => {
        const wrapper = setupTest();

        expect(wrapper.find('[data-qa="dropdown-item"]')).toHaveText(requiredProps.name);
    });
    it('should fire the function when passed', () => {
        const wrapper = setupTest();
        wrapper.find('[data-qa="dropdown-item"]').simulate('click');

        expect(requiredProps.onClick).toHaveBeenCalled();
    });
});

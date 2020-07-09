import React from 'react';

import SearchInput from '.';

const requiredProps = {
    onSearch: jest.fn(),
};

const setupTest = () => mount(<SearchInput {...requiredProps} />);

describe('SearchInput', () => {
    it('should render the search button correctly', () => {
        const wrapper = setupTest();

        expect(wrapper.find('[data-id="search-button"]')).toHaveLength(1);
    });
    it('should render the input field when the search button is clecked', () => {
        const wrapper = setupTest();
        const button = wrapper.find('[data-id="search-button"] button');

        button.simulate('click');

        expect(wrapper.find('[data-qa="input-field"]')).toHaveLength(1);
    });
    it('should return to the menu item button when the arrow is clicked', () => {
        const wrapper = setupTest();
        wrapper.find('[data-id="search-button"] button').simulate('click');

        const arrowClose = wrapper.find('[data-id="arrow-close-button"]');
        expect(arrowClose).toHaveLength(1);

        arrowClose.find('button').simulate('click');
        expect(wrapper.find('[data-id="search-button"]')).toHaveLength(1);
    });
    it('should take the user input correctly', () => {
        const wrapper = setupTest();

        wrapper.find('[data-id="search-button"] button').simulate('click');

        const input = wrapper.find('[data-qa="input-field"] input');
        input.simulate('change', { target: { value: 'this is a test' } });

        expect(wrapper.find('[data-qa="input-field"] input')).toHaveProp('value', 'this is a test');
    });
    it('should not fire the search if a different key instaed of Enter is pressed', () => {
        const wrapper = setupTest();

        wrapper.find('[data-id="search-button"] button').simulate('click');

        const input = wrapper.find('[data-qa="input-field"] input');
        input.simulate('change', { target: { value: 'this is a test' } });

        expect(wrapper.find('[data-qa="input-field"] input')).toHaveProp('value', 'this is a test');

        wrapper.find('input').simulate('keypress', { key: 'Up' });

        expect(wrapper.find('input')).not.toHaveProp('value', '');
    });
});

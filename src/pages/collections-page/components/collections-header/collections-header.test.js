import React from 'react';

import CollectionsHeader from '.';

const requiredProps = {
    onCreateCollection: jest.fn(),
};

const setupTest = () => mount(<CollectionsHeader {...requiredProps} />);

describe('CollectionsHeader', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render the "add collection" button', () => {
        const wrapper = setupTest();
        expect(wrapper.find('[data-id="add-collection-button"]')).toHaveLength(1);
    });
    it('should render the input field when "add collection" button is clicked', () => {
        const wrapper = setupTest();

        const button = wrapper.find('[data-id="add-collection-button"] button');
        button.simulate('click');

        expect(wrapper.find('[data-qa="input-field"]')).toHaveLength(1);
    });
    it('should close the input field when "add collection" button is clicked twice', () => {
        const wrapper = setupTest();

        const button = wrapper.find('[data-id="add-collection-button"] button');
        button.simulate('click');

        expect(wrapper.find('[data-qa="input-field"]')).toHaveLength(1);

        button.simulate('click');

        expect(wrapper.find('[data-qa="input-field"]')).toHaveLength(0);
    });
    it('should allow the user to add a collection using the enter key', () => {
        const wrapper = setupTest();

        const button = wrapper.find('[data-id="add-collection-button"] button');
        button.simulate('click');

        const input = wrapper.find('[data-qa="input-field"] input');

        input.simulate('change', { target: { value: 'this is a test' } });
        input.simulate('keypress', { key: 'Enter' });

        expect(requiredProps.onCreateCollection).toHaveBeenCalled();
    });
    it('shoudl not add a collection if a different key other than enter is pressed', () => {
        const wrapper = setupTest();

        const button = wrapper.find('[data-id="add-collection-button"] button');
        button.simulate('click');

        const input = wrapper.find('[data-qa="input-field"] input');
        input.simulate('keypress', { key: 'ArrowDown' });

        expect(requiredProps.onCreateCollection).not.toHaveBeenCalled();
    });
    it('should allow the user to add a collection using the add button', () => {
        const wrapper = setupTest();

        const button = wrapper.find('[data-id="add-collection-button"] button');
        button.simulate('click');

        const input = wrapper.find('[data-qa="input-field"] input');

        input.simulate('change', { target: { value: 'this is a test' } });
        const addButton = wrapper.find('[data-id="add-button"] button');

        addButton.simulate('click');

        expect(requiredProps.onCreateCollection).toHaveBeenCalled();
    });
});

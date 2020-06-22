import React from 'react';

import InputField from '.';

const requiredProps = {
    onKeyPress: jest.fn(),
    placeholder: 'test',
    onChange: jest.fn(),
    value: 'test',
};

const setupTest = (props) => mount(<InputField {...requiredProps} {...props} />);

describe('InputField', () => {
    describe('Default', () => {
        it('should render a text input by default', () => {
            const wrapper = setupTest();

            expect(wrapper.find('[data-qa="input-field"]')).toHaveClassName('inputField');
            expect(wrapper.find('[data-qa="input-field"] input')).toHaveClassName('input');
            expect(wrapper.find('[data-qa="input-field"] input')).toHaveProp('value', 'test');
            expect(wrapper.find('[data-qa="input-field"] input')).toHaveProp('placeholder', 'test');
        });
        it('should call the onChange function when then user types', () => {
            const wrapper = setupTest();

            wrapper.find('input').simulate('change');

            expect(requiredProps.onChange).toHaveBeenCalledWith('test');
        });
        it('should call the onKeyPress function when a key is pressed', () => {
            const wrapper = setupTest();

            wrapper.find('input').simulate('keypress');

            expect(requiredProps.onKeyPress).toHaveBeenCalled();
        });
    });
    describe('Custom', () => {
        it('should render a button inside the input field when passed', () => {
            const props = { ButtonIcon: <div data-qa="button-icon" /> };
            const wrapper = setupTest(props);
            expect(wrapper.find('[data-qa="input-field"] [data-qa="button-icon"]')).toHaveLength(1);
        });
    });
});

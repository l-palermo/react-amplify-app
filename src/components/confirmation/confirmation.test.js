import React from 'react';

import Confirmation from '.';

const requiredProps = {
    onConfirmClick: jest.fn(),
    onDenyClick: jest.fn(),
    confirmAriaLabel: 'confirm-test',
    denyAriaLabel: 'deny-test',
};

const setupTest = () => mount(<Confirmation {...requiredProps} />);

describe('Confirmation', () => {
    it('should render the confirmation container correctly', () => {
        const wrapper = setupTest();

        expect(wrapper.find('[data-qa="confirmation"]')).toHaveLength(1);
    });
    it('should render the confirm button with the correct aria label', () => {
        const wrapper = setupTest();

        expect(wrapper.find('[data-qa="confirm-button"]')).toHaveProp('aria-label', 'confirm-test');
    });
    it('should render the deny button with the correct aria label', () => {
        const wrapper = setupTest();

        expect(wrapper.find('[data-qa="deny-button"]')).toHaveProp('aria-label', 'deny-test');
    });
    it('should call the onConfirmClick funcion when the confirm button is clicked', () => {
        const wrapper = setupTest();
        const button = wrapper.find('[data-qa="confirm-button"]');

        button.simulate('click');

        expect(requiredProps.onConfirmClick).toHaveBeenCalled();
    });
    it('should call the onDenyClick funcion when the deny button is clicked', () => {
        const wrapper = setupTest();
        const button = wrapper.find('[data-qa="deny-button"]');

        button.simulate('click');

        expect(requiredProps.onDenyClick).toHaveBeenCalled();
    });
});

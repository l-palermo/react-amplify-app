import React from 'react';
import { act } from 'react-dom/test-utils';

import Card from './card';

jest.useFakeTimers();

const requiredProps = {
    imageUrl: 'test url',
    imageAlt: 'image test',
    children: <div data-qa="test-1" />,
    onClick: jest.fn(),
};

const setupTest = (props) => mount(<Card {...requiredProps} {...props} />);

describe('Card', () => {
    describe('Default', () => {
        it('should render a card', () => {
            const wrapper = setupTest();
            expect(wrapper.find('[data-qa="card"]')).toHaveClassName('card');
        });
        it('should be clickable', () => {
            const wrapper = setupTest();

            wrapper.find('[data-qa="card"] button').simulate('click');

            expect(requiredProps.onClick).toHaveBeenCalled();
        });
        it('should render an image correctly', () => {
            const wrapper = setupTest();
            expect(wrapper.find('[data-qa="card"] [data-qa="card-image"]')).toHaveClassName(
                'image'
            );
            expect(wrapper.find('[data-qa="card"] [data-qa="card-image"]')).toHaveProp(
                'alt',
                requiredProps.imageAlt
            );
            expect(wrapper.find('[data-qa="card"] [data-qa="card-image"]')).toHaveProp(
                'src',
                requiredProps.imageUrl
            );
        });
    });
    describe('Custom', () => {
        it('should render the children correctly in the header', () => {
            const wrapper = setupTest();

            expect(wrapper.find('[data-qa="card-header"] [data-qa="test-1"]')).toHaveLength(1);
        });
        it('should render the header objects group with an aria label for accessibility', () => {
            const ariaLabel = 'group, header items';
            const wrapper = setupTest({ headerAriaLabel: ariaLabel });

            expect(wrapper.find('[data-qa="card-header"]')).toHaveProp('aria-label', ariaLabel);
        });
        it('should render the confirmation text when the prop is passed and the card is clicked', () => {
            const props = { clickConfirmationText: 'Copied!' };
            const wrapper = setupTest(props);

            wrapper.find('[data-qa="card"] button').simulate('click');

            expect(wrapper.find('[data-qa="card-clicked-text"]')).toHaveText(
                props.confirmationText
            );
        });
        it('should should unmount the confirmation text after 1 second from clicking', () => {
            const props = { clickConfirmationText: 'Copied!' };
            const wrapper = setupTest(props);

            wrapper.find('[data-qa="card"] button').simulate('click');

            expect(wrapper.find('[data-qa="card-clicked-text"]')).toHaveText(
                props.confirmationText
            );

            act(() => {
                jest.advanceTimersByTime(1000);
            });
            wrapper.update();

            expect(wrapper.find('[data-qa="card-clicked-text"]')).toHaveLength(0);
        });
    });
});

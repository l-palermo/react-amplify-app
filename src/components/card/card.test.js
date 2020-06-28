import React from 'react';

import Card from './card';

const requiredProps = {
    imageUrl: 'test url',
    imageAlt: 'image test',
    children: <div data-qa="test-1" />,
};

const setupTest = () => mount(<Card {...requiredProps} />);

describe('Card', () => {
    it('should render a card', () => {
        const wrapper = setupTest();
        expect(wrapper.find('[data-qa="card"]')).toHaveClassName('card');
    });
    it('should render an image correctly', () => {
        const wrapper = setupTest();
        expect(wrapper.find('[data-qa="card"] [data-qa="card-image"]')).toHaveClassName('image');
        expect(wrapper.find('[data-qa="card"] [data-qa="card-image"]')).toHaveProp(
            'alt',
            requiredProps.imageAlt
        );
        expect(wrapper.find('[data-qa="card"] [data-qa="card-image"]')).toHaveProp(
            'src',
            requiredProps.imageUrl
        );
    });
    it('should render the children correctly in the header', () => {
        const wrapper = setupTest();

        expect(wrapper.find('[data-qa="card-header"] [data-qa="test-1"]')).toHaveLength(1);
    });
});

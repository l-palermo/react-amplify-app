import React from 'react';

import Text from '.';

const requiredProps = {
    children: 'test',
};

const setupTest = () => mount(<Text {...requiredProps}></Text>);

describe('Text', () => {
    it('should render the text correctly', () => {
        const wrapper = setupTest();
        expect(wrapper.find('[data-qa="text"]')).toHaveText(requiredProps.children);
    });
    it('should render the text on a div tag by default', () => {
        const wrapper = setupTest();
        expect(wrapper).toHaveProp('tag', 'div');
        expect(wrapper.find('div[data-qa="text"]')).toHaveLength(1);
    });
    it('should render the text as a medium size by default', () => {
        const wrapper = setupTest();
        expect(wrapper).toHaveProp('size', 'M');
        expect(wrapper.find('[data-qa="text"]')).toHaveClassName('M');
    });
    it('should render the text on a div tag by default', () => {
        const wrapper = setupTest();
        expect(wrapper).toHaveProp('size', 'M');
        expect(wrapper.find('[data-qa="text"]')).toHaveClassName('M');
    });
    it('should render the text on a medium weight by default', () => {
        const wrapper = setupTest();
        expect(wrapper).toHaveProp('weight', 'MEDIUM');
        expect(wrapper.find('[data-qa="text"]')).toHaveClassName('MEDIUM');
    });
});

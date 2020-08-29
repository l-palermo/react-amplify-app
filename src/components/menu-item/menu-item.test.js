import React from 'react';

import MenuItem from '.';

const mockMaxTouchPoints = jest.fn().mockImplementation((value) => {
    global.navigator.maxTouchPoints = value;
});

const requiredProps = {
    Icon: () => <div />,
    onClick: jest.fn(),
    name: 'title',
};

const setupTest = (props) => mount(<MenuItem {...requiredProps} {...props} />);

describe('MenuItem', () => {
    describe('default', () => {
        it('should render correctly', () => {
            const wrapper = setupTest();

            expect(wrapper.find('[data-qa="menu-item"]')).toHaveClassName('menuItem');
            expect(wrapper.find('[data-qa="menu-item"] button')).toHaveClassName('button');
            expect(wrapper.find('button Icon')).toHaveClassName('icon');
        });
        it('should renbder the name on mouse enter', () => {
            const wrapper = setupTest();
            wrapper.simulate('mouseenter');
            wrapper.update();
            expect(wrapper.find('[data-qa="name-box"]')).toHaveClassName('nameBox');
        });
        it('should call the passed function when clicked', () => {
            const wrapper = setupTest();
            wrapper.find('button').simulate('click');
            expect(requiredProps.onClick).toHaveBeenCalled();
        });
        it('should have a aria label attributo for accessibility', () => {
            const wrapper = setupTest();

            expect(wrapper.find('button')).toHaveProp('aria-label', requiredProps.name);
        });
    });
    describe('custom', () => {
        it('should render an icon surrounded by a circle', () => {
            const wrapper = setupTest({ hasCircle: true });
            expect(wrapper.find('button')).toHaveClassName('button hasCircle');
        });
        it('should render an icon with a right padding', () => {
            const wrapper = setupTest({ hasPaddingRight: true });
            expect(wrapper.find('[data-qa="menu-item"]')).toHaveClassName('menuItem paddingRight');
        });
        it('should render a data-id attribute', () => {
            const wrapper = setupTest({ dataId: 'test' });
            expect(wrapper.find('[data-id="test"]')).toHaveLength(1);
        });
        it('should render a small button when isHeaderItem is true', () => {
            const wrapper = setupTest({ isHeaderItem: true });
            expect(wrapper.find('button')).toHaveClassName('button hasCircle isHeaderItem');
        });
        it('should render a name box on mouse enter if the device is desktop', () => {
            mockMaxTouchPoints(0);
            const props = { name: 'test' };
            const wrapper = setupTest(props);

            wrapper.simulate('mouseenter');
            expect(wrapper.find('[data-qa="name-box"]')).toHaveText(props.name);

            wrapper.simulate('mouseleave');
            expect(wrapper.find('[data-qa="name-box"]')).toHaveLength(0);
        });
        it('should render a title box on click if the device is touch screen and MenuItem is an header item', () => {
            mockMaxTouchPoints(1);
            const props = { name: 'test', isHeaderItem: true };
            const wrapper = setupTest(props);

            wrapper.simulate('mouseenter');
            expect(wrapper.find('[data-qa="name-box"]')).toHaveLength(0);

            wrapper.find('button').simulate('click');
            expect(wrapper.find('[data-qa="name-box"]')).toHaveLength(1);
        });
    });
});

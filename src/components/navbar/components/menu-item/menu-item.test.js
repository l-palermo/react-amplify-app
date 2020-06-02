import React from 'react';

import MenuItem from '.';

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
  });
  describe('custom', () => {
    it('should render an icon surrounded by a circle', () => {
      const wrapper = setupTest({ hasCircle: true });
      expect(wrapper.find('button')).toHaveClassName('button hasCircle');
    });
    it('should render an icon with a right margin', () => {
      const wrapper = setupTest({ hasMarginRight: true });
      expect(wrapper.find('button')).toHaveClassName('button marginRight');
    });
  });
});
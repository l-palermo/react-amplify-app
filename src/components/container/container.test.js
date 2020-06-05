import React from 'react';
import Container from '.';

const requiredProps = {
  children: <></>,
};

const setupTest = (props) => mount(<Container {...requiredProps} {...props} />);

describe('Container', () => {
  it('should render correctly', () => {
    const wrapper = setupTest({ children: <div /> });
    expect(wrapper.find('[data-qa="container"]')).toHaveClassName('container');
  });
  it('should render the children correctky', () => {
    const wrapper = setupTest({ children: <div /> });
    expect(wrapper.find('[data-qa="container-children"]')).toHaveClassName('children');
  });
  it('should render the data-id', () => {
    const wrapper = setupTest({ dataId: 'test' });
    expect(wrapper.find('[data-id="test"]')).toHaveLength(1);
  });
});

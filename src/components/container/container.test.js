import React from 'react';
import Container from '.';

const setupTest = (props) => mount(<Container {...props} />);

describe('Container', () => {
  it('should render correctly', () => {
    const wrapper = setupTest({ children: <div /> });
    expect(wrapper.find('[data-qa="container"]')).toHaveClassName('container');
  });
  it('should render the children correctky', () => {
    const wrapper = setupTest({ children: <div /> });
    expect(wrapper.find('[data-qa="container-children"]')).toHaveClassName('children');
  });
});

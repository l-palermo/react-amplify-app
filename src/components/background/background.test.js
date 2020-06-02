import React from 'react';
import Background from '.';

const setupTest = (props) => mount(<Background {...props} />);

describe('Background', () => {
  it('render correctly', () => {
    const wrapper = setupTest({ children: <div /> });
    expect(wrapper.find('[data-qa="background"]')).toHaveClassName('background');
  });
});

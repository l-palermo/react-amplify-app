import React from 'react';

import HomePage from '.';

const setupTest = () => mount(<HomePage />);

describe('HomePage', () => {
  it('should render', () => {
    const wrapper = setupTest();
    expect(wrapper.find('[data-qa="home-page"]')).toHaveLength(1);
  });
});

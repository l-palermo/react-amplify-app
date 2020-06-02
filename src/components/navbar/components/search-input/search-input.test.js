import React from 'react';

import SearchInput from '.';

const setupTest = () => mount(<SearchInput />);

describe('SearchInput', () => {
  it('should render a menu-item by default', () => {
    const wrapper = setupTest();
    expect(wrapper.find('MenuItem')).toHaveLength(1);
  });
  it('should render a text input when clicked', () => {
    const wrapper = setupTest();
    wrapper.find('button').simulate('click');
    expect(wrapper.find('[data-qa="search-input"]')).toHaveClassName('searchInput');
    expect(wrapper.find('[data-qa="search-input"] input')).toHaveClassName('input');
    expect(wrapper.find('[data-qa="search-input"] MenuItem')).toHaveLength(1);
  });
});

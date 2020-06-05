import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import SearchInput from '.';
import { UserContextProvider } from '../../../../helpers/user-context/user-context';

const setupTest = () =>
  mount(
    <MemoryRouter initialEntries={['/home']}>
      <UserContextProvider>
        <SearchInput />
      </UserContextProvider>
    </MemoryRouter>
  );

describe('SearchInput', () => {
  it('should render a menu-item by default', () => {
    const wrapper = setupTest();
    expect(wrapper.find('MenuItem')).toHaveProp('name', 'Search');
  });
  it('should render a text input when clicked', () => {
    const wrapper = setupTest();
    wrapper.find('button').simulate('click');

    expect(wrapper.find('[data-qa="search-input"]')).toHaveClassName('searchInput');
    expect(wrapper.find('[data-qa="search-input"] input')).toHaveClassName('input');
    expect(wrapper.find('[data-qa="search-input"] MenuItem')).toHaveProp('name', 'Close');
  });
  it('should return to the menu item button when the arrow is clicked', () => {
    const wrapper = setupTest();
    wrapper.find('button').simulate('click');

    const arrowClose = wrapper.find('[data-qa="search-input"] MenuItem');
    expect(arrowClose).toHaveProp('name', 'Close');

    arrowClose.find('button').simulate('click');
    expect(wrapper.find('MenuItem')).toHaveProp('name', 'Search');
  });
  it('should render the input correctly', () => {
    const wrapper = setupTest();

    wrapper.find('button').simulate('click');
    wrapper.find('input').simulate('change', { target: { value: 'this is a test' } });

    expect(wrapper.find('input')).toHaveProp('value', 'this is a test');
  });
  it('should clear input text field after click', () => {
    const wrapper = setupTest();

    wrapper.find('button').simulate('click');
    wrapper.find('input').simulate('change', { target: { value: 'this is a test' } });

    expect(wrapper.find('input')).toHaveProp('value', 'this is a test');

    wrapper.find('input').simulate('keypress', { key: 'Enter' });
    expect(wrapper.find('input')).toHaveProp('value', '');
  });
  // test react router action
});

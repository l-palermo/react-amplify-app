import React from 'react';

import Navbar from '.';
import { UserContextProvider } from '../../helpers/user-context/user-context';

const setupTest = () =>
  mount(
    <UserContextProvider>
      <Navbar />
    </UserContextProvider>
  );

describe('Navbar', () => {
  it('should render the navbar', () => {
    const wrapper = setupTest();
    expect(wrapper.find('[data-qa="navbar"]')).toHaveClassName('navbar');
  });
  it('should render a navbar with a predefined layout', () => {
    const wrapper = setupTest();
    expect(wrapper.find('[data-qa="navbar"] Container [data-qa="navbar-layout"]')).toHaveLength(1);
  });
  it('should render a navbar with the logo', () => {
    const wrapper = setupTest();
    expect(wrapper.find('[data-qa="navbar"] [data-qa="logo"]')).toHaveClassName('logo');
  });
  it('should render a navbar with the correct buttons', () => {
    const wrapper = setupTest();
    const buttonNames = [{ name: 'Search' }, { name: 'My account' }, { name: 'Log out' }];

    const buttons = wrapper.find('[data-qa="navbar"] MenuItem');
    expect(buttons).toHaveLength(3);

    buttons.forEach((button, index) => {
      expect(button).toHaveProp('name', buttonNames[index].name);
    });
  });
});

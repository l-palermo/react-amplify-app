import React from 'react';

import HomePage from '.';
import { UserContextProvider } from '../../helpers/user-context/user-context';

const setupTest = () =>
  mount(
    <UserContextProvider>
      <HomePage />
    </UserContextProvider>
  );

describe('HomePage', () => {
  it('should render', () => {
    const wrapper = setupTest();
    expect(wrapper.find('[data-qa="home-page"]')).toHaveLength(1);
  });
});

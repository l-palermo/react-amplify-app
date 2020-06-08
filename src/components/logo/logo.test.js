import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Logo from '.';

const requiredProps = {
  children: <div id="test" />,
  path: '/',
};
const setupTest = () =>
  mount(
    <MemoryRouter>
      <Logo {...requiredProps} />
    </MemoryRouter>
  );

describe('Logo', () => {
  it('renders a logo', () => {
    const wrapper = setupTest();
    expect(wrapper.find('[data-qa="logo"]')).toHaveLength(1);
  });
  it('should link to the correct path', () => {
    const wrapper = setupTest();
    expect(wrapper.find('Link')).toHaveProp('to', requiredProps.path);
  });
  it('should render the correct child', () => {
    const wrapper = setupTest();
    expect(wrapper.find('div[id="test"]')).toHaveLength(1);
  });
});

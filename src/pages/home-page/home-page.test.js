import React from 'react';
import { act } from 'react-dom/test-utils';

import HomePage from '.';
import { UserContextProvider } from '../../helpers/user-context/user-context';

const mockClipboard = {
  writeText: jest.fn(),
};

global.navigator.clipboard = mockClipboard;

global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: () => ({
      gfycats: [
        { gifUrl: 'https://banana.com', gfyName: 'test', gfyId: 'test id' },
        { gifUrl: 'https://gif.com', gfyName: 'test next', gfyId: 'test ide' },
      ],
    }),
  })
);

const setupTest = () =>
  mount(
    <UserContextProvider>
      <HomePage />
    </UserContextProvider>
  );

describe('HomePage', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('should render', async () => {
    let wrapper;

    await act(async () => {
      wrapper = setupTest();
    });
    wrapper.update();

    expect(wrapper.find('[data-qa="home-page"]')).toHaveLength(1);
    expect(wrapper.find('CardsLayout [data-id="home-page-cards-layout"]')).toHaveLength(1);
    expect(wrapper.find('CardsLayout [data-qa="card"]')).toHaveLength(2);
  });
});

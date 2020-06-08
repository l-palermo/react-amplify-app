import React from 'react';
import { act } from 'react-dom/test-utils';

import Card from './card';

jest.useFakeTimers();

const mockClipboard = {
  writeText: jest.fn(),
};

global.navigator.clipboard = mockClipboard;

const requiredProps = {
  imageUrl: 'test url',
  imageAlt: 'image test',
};

const setupTest = (props) => mount(<Card {...requiredProps} {...props} />);

describe('Card', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('should render a card', () => {
    const wrapper = setupTest();
    expect(wrapper.find('[data-qa="card"]')).toHaveClassName('card');
  });
  it('should render an image correctly', () => {
    const wrapper = setupTest();
    expect(wrapper.find('[data-qa="card"] [data-qa="card-image"]')).toHaveClassName('image');
    expect(wrapper.find('[data-qa="card"] [data-qa="card-image"]')).toHaveProp(
      'alt',
      requiredProps.imageAlt
    );
    expect(wrapper.find('[data-qa="card"] [data-qa="card-image"]')).toHaveProp(
      'src',
      requiredProps.imageUrl
    );
  });
  it('should render the copy button', () => {
    const wrapper = setupTest();
    expect(wrapper.find('[data-id="card-copy-button"]')).toHaveLength(1);
  });
  it('should copy url to clipboard', () => {
    const wrapper = setupTest();
    const button = wrapper.find('[data-id="card-copy-button"]').find('button');
    button.simulate('click');
    expect(mockClipboard.writeText).toHaveBeenCalled();
  });

  it('should render a different icon after copy button is clicked', () => {
    const wrapper = setupTest();
    const button = wrapper.find('[data-id="card-copy-button"]').find('button');
    button.simulate('click');
    act(() => {
      jest.advanceTimersByTime(700);
    });
    wrapper.update();
  });
  it('should render the title button', () => {
    const props = { title: 'test' };
    const wrapper = setupTest(props);
    expect(wrapper.find('[data-id="card-name-button"]')).toHaveLength(1);
  });
});

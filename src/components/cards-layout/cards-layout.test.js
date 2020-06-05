import React from 'react';

import CardsLayout from './cards-layout';

const requiredProps = {
  children: <div id="test" />,
};

const setupTest = (props) => mount(<CardsLayout {...requiredProps} {...props} />);

describe('Cards layout', () => {
  it('should render teh cards correctly', () => {
    const wrapper = setupTest();

    expect(wrapper.find('[data-qa="page-cards-layout"]')).toHaveClassName('cardsLayout');
  });
  it('should render a data id prop correctly', () => {
    const wrapper = setupTest({ dataId: 'test'});
    expect(wrapper.find('[data-id="test"]')).toHaveLength(1);
  });
});

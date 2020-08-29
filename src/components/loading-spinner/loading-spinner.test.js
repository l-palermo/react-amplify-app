import React from 'react';

import LoadingSpinner from '.';

const setupTest = () => mount(<LoadingSpinner />);

describe('LoadingSpinner', () => {
    it('should render correctly', () => {
        const wrapper = setupTest();
        expect(wrapper.find('[data-qa="loading-spinner"]')).toHaveLength(1);
    });
});

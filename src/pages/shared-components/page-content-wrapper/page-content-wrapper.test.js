import React from 'react';

import PageContentWrapper from '.';

window.IntersectionObserver = jest.fn().mockImplementation((callback) => {
    const entries = [{ isIntersecting: true }, { isIntersecting: false }];
    callback(entries);
    return {
        observe: () => {},
        unobserve: () => {},
    };
});

const requiredProps = {
    gifs: [
        {
            webpUrl: 'https://banana.com',
            gfyName: 'test',
            gfyId: 'test id',
            title: 'test',
            max2mbGif: 'url',
        },
        {
            webpUrl: 'https://gif.com',
            gfyName: 'test next',
            gfyId: 'test ide',
            title: 'test',
            max2mbGif: 'url',
        },
    ],
    pageTitle: 'test',
    dataId: 'test-page',
};
const setupTest = (props) => mount(<PageContentWrapper {...requiredProps} {...props} />);

describe('PageContentWrapper', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('should render the page title correctly', () => {
        const wrapper = setupTest();

        expect(wrapper.find("h1[data-id='test-page-title']")).toHaveText(requiredProps.pageTitle);
    });
    it('should render the cards correctly', () => {
        const wrapper = setupTest();

        expect(wrapper.find('[data-id="test-page-card-with-header"]')).toHaveLength(2);
    });
    it('should call the intersection observer window object', () => {
        setupTest();

        expect(window.IntersectionObserver).toHaveBeenCalledTimes(1);
    });
    it('should display an helpful message if the payload is empty', () => {
        const props = { helpfulMessage: 'test', hasHelpfulMessage: true };
        const wrapper = setupTest(props);

        expect(wrapper.find('[data-id="test-page-cards-layout"]')).toHaveText(props.helpfulMessage);
    });
});

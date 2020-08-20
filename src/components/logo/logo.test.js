import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Logo from '.';

const requiredProps = {
    path: '/',
    text: 'test',
    icon: <div data-qa="node-test"> </div>,
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
    it('should render a logo text', () => {
        const wrapper = setupTest();

        expect(wrapper.find('.logoText')).toHaveText(requiredProps.text);
    });
    it('should render a logo icon', () => {
        const wrapper = setupTest();

        expect(wrapper.find('[data-qa="node-test"]')).toHaveLength(1);
    });
});

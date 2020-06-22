import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Navbar from '.';
import { UserContextProvider } from '../../helpers/user-context/user-context';

const requiredProps = {
    logOut: jest.fn(),
};
const setupTest = () =>
    mount(
        <MemoryRouter>
            <UserContextProvider>
                <Navbar {...requiredProps} />
            </UserContextProvider>
        </MemoryRouter>
    );

describe('Navbar', () => {
    it('should render the navbar', () => {
        const wrapper = setupTest();
        expect(wrapper.find('[data-qa="navbar"]')).toHaveClassName('navbar');
    });
    it('should render a navbar with a predefined layout', () => {
        const wrapper = setupTest();
        expect(wrapper.find('[data-qa="navbar"] Container [data-qa="navbar-layout"]')).toHaveLength(
            1
        );
    });
    it('should render a navbar with the logo', () => {
        const wrapper = setupTest();
        expect(wrapper.find('[data-qa="navbar"] [data-qa="logo"]')).toHaveClassName('logo');
    });
    it('should render a navbar with the correct buttons', () => {
        const wrapper = setupTest();
        const buttonNames = [{ name: 'Search' }, { name: 'Collections' }, { name: 'Log out' }];

        const buttons = wrapper.find('[data-qa="navbar"] MenuItem');
        expect(buttons).toHaveLength(3);

        buttons.forEach((button, index) => {
            expect(button).toHaveProp('name', buttonNames[index].name);
        });
    });
    it('should open the input field when the search button is clicked', () => {
        const wrapper = setupTest();
        wrapper.find('[data-id="search-button"] button').simulate('click');

        expect(wrapper.find('[data-qa="input-field"]')).toHaveLength(1);
    });
    it('should return to the menu item button when the arrow is clicked', () => {
        const wrapper = setupTest();
        wrapper.find('[data-id="search-button"] button').simulate('click');

        const arrowClose = wrapper.find('[data-id="arrow-close-button"]');
        expect(arrowClose).toHaveLength(1);

        arrowClose.find('button').simulate('click');
        expect(wrapper.find('[data-id="search-button"]')).toHaveLength(1);
    });
    it('should take the user input correctly', () => {
        const wrapper = setupTest();

        wrapper.find('[data-id="search-button"] button').simulate('click');

        const input = wrapper.find('[data-qa="input-field"] input');
        input.simulate('change', { target: { value: 'this is a test' } });

        expect(wrapper.find('[data-qa="input-field"] input')).toHaveProp('value', 'this is a test');
    });
    it('should not fire the search if a different key instaed of Enter is pressed', () => {
        const wrapper = setupTest();

        wrapper.find('[data-id="search-button"] button').simulate('click');

        const input = wrapper.find('[data-qa="input-field"] input');
        input.simulate('change', { target: { value: 'this is a test' } });

        expect(wrapper.find('[data-qa="input-field"] input')).toHaveProp('value', 'this is a test');

        wrapper.find('input').simulate('keypress', { key: 'Up' });

        expect(wrapper.find('input')).not.toHaveProp('value', '');
    });
    it('should route the user to the collection page', () => {
        const wrapper = setupTest();
        wrapper.find('[data-id="collection-button"] button').simulate('click');

        const routerHistory = wrapper.find('Router').prop('history');
        expect(routerHistory.action).toEqual('PUSH');
        expect(routerHistory.location.pathname).toEqual('/collections');
    });
    it('should call the log out function', () => {
        const wrapper = setupTest();
        const logOutButton = wrapper.find('[data-id="log-out-button"] button');

        logOutButton.simulate('click');

        expect(requiredProps.logOut).toHaveBeenCalled();
    });
});

import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Navbar from '.';
import { UserContextProvider } from '../../../helpers/user-context/user-context';

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
        expect(wrapper.find('[data-qa="navbar"] [data-qa="logo"]')).toHaveLength(1);
    });
    it('should render a navbar with the correct buttons', () => {
        const wrapper = setupTest();
        const buttonIds = [
            { dataId: 'home-button' },
            { dataId: 'search-button' },
            { dataId: 'collections-button' },
            { dataId: 'log-out-button' },
        ];

        const buttons = wrapper.find('[data-qa="navbar"] MenuItem');
        expect(buttons).toHaveLength(4);

        buttons.forEach((button, index) => {
            expect(button).toHaveProp('dataId', buttonIds[index].dataId);
        });
    });
    it('should route the user to the collection page', () => {
        const wrapper = setupTest();
        wrapper.find('[data-id="collections-button"] button').simulate('click');

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

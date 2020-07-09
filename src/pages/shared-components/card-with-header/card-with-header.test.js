import React from 'react';
import { act } from 'react-dom/test-utils';

import CardWithHeader from '.';

jest.useFakeTimers();

const mockClipboard = {
    writeText: jest.fn(),
};

global.navigator.clipboard = mockClipboard;

const requiredProps = {
    imageUrl: 'https://test.com',
    imageAlt: 'image test',
    title: 'test',
    copyUrl: 'copyUrl',
};

const setupTest = (props) => mount(<CardWithHeader {...requiredProps} {...props} />);

describe('Card with header', () => {
    afterEach(() => {
        jest.resetAllMocks();
    });

    describe('Default', () => {
        it('should render correctly', () => {
            const wrapper = setupTest();

            expect(wrapper.find('[data-qa="card"]')).toHaveLength(1);
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
    describe('Options', () => {
        it('should render the "add to collection" button', () => {
            const props = { isAdd: true };
            const wrapper = setupTest(props);

            expect(wrapper.find('[data-id="add-to-collection-button"]')).toHaveLength(1);
        });
        it('should render the dropdown list when "add to collection" button is clicked', async () => {
            const props = { isAdd: true };
            const wrapper = setupTest(props);
            const button = wrapper.find('[data-id="add-to-collection-button"] button');

            await act(async () => {
                await button.simulate('click');
            });

            wrapper.update();

            expect(wrapper.find('[data-qa="dropdown-list"]')).toHaveLength(1);
            expect(wrapper.find('[data-qa="dropdown-item"]')).toHaveLength(2);
        });
        it('should add the gif to the correct collection', async () => {
            const props = { isAdd: true };
            const wrapper = setupTest(props);
            const button = wrapper.find('[data-id="add-to-collection-button"] button');

            await act(async () => {
                await button.simulate('click');
            });

            wrapper.update();

            const dropdownItem = wrapper.find('[data-qa="dropdown-item"]').at(0);

            dropdownItem.simulate('click');

            expect(wrapper.find('[data-qa="dropdown-list"]')).toHaveLength(0);

            // mock database
        });
        it('should render the delete button', () => {
            const props = { isDelete: true };
            const wrapper = setupTest(props);

            expect(wrapper.find('[data-id="delete-from-collection"]')).toHaveLength(1);
        });
        it('should delete the gif when the delete button is clicked', () => {
            const props = { isDelete: true, onDelete: jest.fn() };
            const wrapper = setupTest(props);
            const button = wrapper.find('[data-id="delete-from-collection"] button');

            button.simulate('click');

            // mock database
        });
    });
});

import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import fetch from './fetch-mock';

configure({ adapter: new Adapter() });

global.mount = mount;
global.shallow = shallow;
global.React = React;
global.fetch = fetch;

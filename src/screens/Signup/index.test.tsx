import React from 'react';
import { shallow } from 'enzyme';
import { History } from 'history';
import Signup from './index';

test('renders signup', () => {
    const wrapper = shallow(<Signup history= {new Object as History}  userHasAuthenticated = {(val:true) => null} />);
    expect(wrapper).toMatchSnapshot();
});
import NotFound from './index';
import React from 'react';
import { shallow } from 'enzyme';

test('renders Not Found', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
});
import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './index';

test('renders Not Found', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
});

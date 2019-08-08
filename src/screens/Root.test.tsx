import React from 'react';
import { shallow } from 'enzyme';
import Root from './Root';

test('renders root', () => {
  const wrapper = shallow(<Root />);
  expect(wrapper).toMatchSnapshot();
});
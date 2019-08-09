import React from 'react';
import { mount } from 'enzyme';
import { History } from 'history';
import NewNote from './index';

test('render new note', () => {
  const wrapper = mount(
      <NewNote history = {new Object as History}/>
  );
  expect(wrapper).toMatchSnapshot();
});

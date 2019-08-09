import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import Login from './index';
import store from '../../store';
import { userHasAuthenticated } from '../../actions/authenticate';

test('render login', () => {
  store.dispatch(userHasAuthenticated(true))
  const wrapper = mount(
    <Provider store={store}>
      <Login />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});

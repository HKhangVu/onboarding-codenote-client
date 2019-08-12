import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux';
import UnauthenticatedRoute from './index';
import Login from '../../screens/Login';
import store from '../../store';
import { userHasAuthenticated } from '../../actions/authenticate';

describe("test render UnauthenticatedRoute", () => {
  test('renders UnauthenticatedRoute have isAuthenticated true', () => {
    store.dispatch(userHasAuthenticated(false));
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/login']}>
          <UnauthenticatedRoute component={Login} />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  test('renders UnauthenticatedRoute have isAuthenticated false', () => {
    store.dispatch(userHasAuthenticated(true));
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/login']}>
          <UnauthenticatedRoute component={Login} />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.find("Redirect")).toHaveLength(1);
  });
});

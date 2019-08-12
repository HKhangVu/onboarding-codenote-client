import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux';
import AuthenticatedRoute from './index';
import NewNote from '../../screens/NewNote';
import store from '../../store';
import { userHasAuthenticated } from '../../actions/authenticate';

describe("AuthenticatedRoute", () => {
  test('renders with authentication', () => {
    store.dispatch(userHasAuthenticated(true));
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/notes/new']}>
          <AuthenticatedRoute component={NewNote} />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.find(NewNote)).toHaveLength(1);
  });
  test('renders without authentication', () => {
    store.dispatch(userHasAuthenticated(false));
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/notes/new']}>
          <AuthenticatedRoute component={NewNote} />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.find("Redirect")).toHaveLength(1);
  });
});

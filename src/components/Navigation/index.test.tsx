import React from 'react';
import {mount} from 'enzyme';
import {MemoryRouter} from 'react-router'
import {Provider} from 'react-redux';
import {History} from 'history';
import Navigation from '../../components/Navigation';
import store from '../../store';
import {userHasAuthenticated} from '../../actions/authenticate';

describe("Navigation Bar", () => {
  test('render after login', () => {
    store.dispatch(userHasAuthenticated(true));
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter >
          <Navigation history={{} as History} isAuthenticated userHasAuthenticated={() => {
          }}/>
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('render without login', () => {
    store.dispatch(userHasAuthenticated(false));
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter >
          <Navigation history={{} as History} isAuthenticated userHasAuthenticated={() => {
          }}/>
        </MemoryRouter>
      </Provider>
    );
    console.log(wrapper.debug());
    expect(wrapper).toMatchSnapshot();
  });
    
  test('logout button', ()  => {
    let iprop =  {history : ({push:()=>{}} as any) as History,isAuthenticated:true,userHasAuthenticated:()=>{}}
    store.dispatch(userHasAuthenticated(true));
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter >
          <Navigation {...iprop} />
        </MemoryRouter>
      </Provider>
    );
    const spy = jest.spyOn(wrapper.find(Navigation).children().instance(), 'handleLogout');
    wrapper.find(Navigation).children().instance().handleLogout();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});

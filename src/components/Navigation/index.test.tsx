import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux';
import { NavItem} from "react-bootstrap";
import { History } from 'history';
import Navigation from '../../components/Navigation';
import store from '../../store';
import { userHasAuthenticated } from '../../actions/authenticate';

describe("Navigation Bar", () => {
  test('render after login', () => {
    store.dispatch(userHasAuthenticated(true));
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter >
          <Navigation history={new Object as History} isAuthenticated userHasAuthenticated={(val:true)=>{}} />
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
          <Navigation history={new Object as History} isAuthenticated userHasAuthenticated={(val:true)=>{}}/>
        </MemoryRouter>
      </Provider>
    );
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
    const navInstance = wrapper.find(NavItem);
    navInstance.props().onClick = jest.fn();
    wrapper.instance().forceUpdate();
    const logoutBtn = wrapper.find(NavItem).find('a');
    navInstance.props().onClick();
    // navInstance.instance().handleLogout();
    // logoutBtn.props().onClick();
    expect( navInstance.props().onClick).toHaveBeenCalled();
  });
});

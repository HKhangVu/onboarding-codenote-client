import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter} from 'react-router'
import { Provider } from 'react-redux';
import AuthenticatedRoute from './index';
import NewNote from '../../screens/NewNote';
import store from '../../store'; 
import authenticate from "../../reducers"
import { userHasAuthenticated } from '../../actions/authenticate';

describe("test render AuthenticatedRoute", () => {
    test('renders AuthenticatedRoute have isAuthenticated true', () => { 
        store.dispatch(userHasAuthenticated(true));
        const wrapper= mount( 
            <Provider store={store}>
                <MemoryRouter initialEntries = {['/notes/new']}>
                    <AuthenticatedRoute component={NewNote}  />
                </MemoryRouter>
            </Provider>  
        );
        expect(wrapper.find(NewNote)).toHaveLength(1);
    });
    test('renders AuthenticatedRoute have isAuthenticated true', () => { 
        store.dispatch(userHasAuthenticated(false));
        const wrapper= mount( 
            <Provider store={store}>
                <MemoryRouter initialEntries = {['/notes/new']}>
                    <AuthenticatedRoute component={NewNote}  />
                </MemoryRouter>
            </Provider>  
        );
        expect(wrapper.find("Redirect")).toHaveLength(1);
    });
});
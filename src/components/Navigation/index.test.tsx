import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux';
import Navigation from '../../components/Navigation';
import store from '../../store';
import { userHasAuthenticated } from '../../actions/authenticate';

describe("test Navigation Bar", () => {
	test('render after login', () => {
		store.dispatch(userHasAuthenticated(true));
		const wrapper = mount(
			<Provider store={store}>
				<MemoryRouter >
					<Navigation />
				</MemoryRouter>
			</Provider>
		);
		expect(wrapper).toMatchSnapshot();
	});

	test('render not login', () => {
		store.dispatch(userHasAuthenticated(false));
		const wrapper = mount(
			<Provider store={store}>
				<MemoryRouter >
					<Navigation />
				</MemoryRouter>
			</Provider>
		);
		expect(wrapper).toMatchSnapshot();
	});

	test('logout button', () => {});
});

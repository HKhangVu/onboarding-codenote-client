import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux';
import Home from '../../screens/Home';
import Navigation from '../Navigation';
import store from '../../store';
import AppliedRoute from './index';

describe("test render AppliedRoute", () => {
  test('renders AppliedRoute have all params', () => {
    let rest: { [index: string]: string } = {}
    rest['path'] = "/";
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter  >
          <AppliedRoute component={Home} props={"string"} {...rest} />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.find(Home)).toHaveLength(1);
  });

  test('renders AppliedRoute do not have props', () => {
    let rest: { [index: string]: { message: string } } = {}
    rest['a'] = { message: 'some message' };
    const wrapper = shallow(<AppliedRoute component={Home} {...rest} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('renders AppliedRoute Home do not have rest', () => {
    const wrapper = shallow(<AppliedRoute component={Home} props={new Object()} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('renders AppliedRoute Navigation only have component', () => {
    const wrapper = shallow(<AppliedRoute component={Navigation} />);
    expect(wrapper).toMatchSnapshot();
  });
});

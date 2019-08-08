import AppliedRoute from './index';
import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../screens/Home';
import Navigation from '../Navigation'; 

describe("test render AppliedRoute", () => {
    
    test('renders AppliedRoute have all params', () => { 
        let rest : { [index:string] :  string } = {}
        rest['path'] = "/cool";
        const wrapper = shallow(<AppliedRoute component = { Home } props = {"string"} {...rest}  />);
        expect(wrapper).toMatchSnapshot();
    });
    test('renders AppliedRoute do not have props', () => { 
        let rest : { [index:string] : {message: string} } = {}
        rest['a'] = {message: 'some message'};
        const wrapper = shallow(<AppliedRoute component = { Home } {...rest}  />);
        expect(wrapper).toMatchSnapshot();
    });
    test('renders AppliedRoute Home do not have rest', () => {
        const wrapper = shallow(<AppliedRoute component = { Home } props = {new Object()}/>);
        expect(wrapper).toMatchSnapshot();
    });
    test('renders AppliedRoute Navigation only have component', () => {
        const wrapper = shallow(<AppliedRoute component = { Navigation } />);
        expect(wrapper).toMatchSnapshot();
    });
});
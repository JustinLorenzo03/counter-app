import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Testing the Header function with enzyme', () => {
    it('knows Counter App', () => {
        const wrapper = shallow(<Header />);
        const text = wrapper.find('h1');
        expect(text).toHaveLength(1);
    })
})

describe('testing the header prints right', () => {
    it('knows to print the h1', () => {
        const wrapper = shallow(<Header />);
        const text = wrapper.find('h1').text();
        expect(text).toEqual("Counter App");
    })
})
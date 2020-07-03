import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';

describe('Testing the Footer function with enzyme', () => {
    it('knows Did You Reach Your Limit', () => {
        const wrapper = shallow(<Footer />);
        const text = wrapper.find('h3');
        expect(text).toHaveLength(1);
    })
})

describe('Testing the h2 prints right', () => {
    it('knows what to print', () => {
        const wrapper = shallow(<Footer />);
        const text = wrapper.find('h3').text();
        expect(text).toEqual('Did You Reach Your Limit?');
    })
})
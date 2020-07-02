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

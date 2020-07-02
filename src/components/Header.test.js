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

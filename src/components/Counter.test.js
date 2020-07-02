import React from 'react';
import Counter from './Counter';
import { shallow } from 'enzyme';


describe('Testing the Counter component with enzyme', () => {

    it('increments count by 1 when increment button is clicked', () => {
        const wrapper = shallow(<Counter />);
        const incrementBtn = wrapper.find('button.increment');
        incrementBtn.simulate('click');
        const text = wrapper.find('h2').text();
        expect(text).toEqual('1');
    })
})
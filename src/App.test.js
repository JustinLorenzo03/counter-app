import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';

describe('Tests for Our app', () => {
    it('Knows that 2 and 2 make 4', () => {
        expect(2 + 2).toEqual(4);
    })
})

describe('Testing App Component With Enzyme', () => {
    it('Has One Header', () => {
        const wrapper = shallow(<App />);
        const header = wrapper.find('Header');
        expect(header).toHaveLength(1);
    })
})

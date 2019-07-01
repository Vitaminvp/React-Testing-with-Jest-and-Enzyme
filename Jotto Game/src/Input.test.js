import React from 'react';
import { shallow } from 'enzyme';
import { findByAttr, storeFactory } from '../test/testUtils';
import Input from './Input';

const setup = (initialState = {}) => {
	const store = storeFactory(initialState);
	const wrapper = shallow(<Input store={store} />).dive().dive();
	//console.log(wrapper.debug());
};

//setup();

describe('render', () => {
	describe('word has not been guest', () => {
		it('render component withaut error', () => {});
		it('render input box', () => {});
		it('render submit button', () => {});
		it('', () => {});
	});
	describe('word has been guest', () => {
		it('render component withaut error', () => {});
		it('does not render input box', () => {});
		it('does not render submit button', () => {});
	});
});

describe('update state', () => {});

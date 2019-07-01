import React from 'react';
import { shallow } from 'enzyme';
import { findByAttr, storeFactory } from '../test/testUtils';
import Input from './Input';

const setup = (initialState = {}) => {
	const store = storeFactory(initialState);
	const wrapper = shallow(<Input store={store} />).dive().dive();
	//console.log(wrapper.debug());

	return wrapper;
};

//setup();

describe('render', () => {
	describe('word has not been guest', () => {
		let wrapper;
		beforeEach(() => {
			const initialState = { success: false };
			wrapper = setup(initialState);
		});
		it('render component withaut error', () => {
			const component = findByAttr(wrapper, 'component-input');
			expect(component.length).toBe(1);
		});
		it('render input box', () => {
			const inputBox = findByAttr(wrapper, 'input-box');
			expect(inputBox.length).toBe(1);
		});
		it('render submit button', () => {
			const submitButton = findByAttr(wrapper, 'submit-button');
			expect(submitButton.length).toBe(1);
		});
		it('', () => {});
	});
	describe('word has been guest', () => {
		let wrapper;
		beforeEach(() => {
			const initialState = { success: true };
			wrapper = setup(initialState);
		});
		it('render component withaut error', () => {
			const component = findByAttr(wrapper, 'component-input');
			expect(component.length).toBe(1);
			console.log(wrapper.debug());
		});
		it('does not render input box', () => {
			const inputBox = findByAttr(wrapper, 'input-box');
			expect(inputBox.length).toBe(0);
		});
		it('does not render submit button', () => {
			const submitButton = findByAttr(wrapper, 'submit-button');
			expect(submitButton.length).toBe(0);
		});
	});
});

describe('update state', () => {});

import React from 'react';
import { shallow } from 'enzyme';
import Congrats from './Congrats';
import { findByAttr, checkProps } from '../test/testUtils';

const defaultProps = { success: false };
const setup = (props = {}, state = null) => {
	const setupProps = { ...defaultProps, ...props };
	const wrapper = shallow(<Congrats {...setupProps} />);
	if (state) wrapper.setState(state);
	return wrapper;
};

it('renders without crashing', () => {
	const wrapper = setup();
	const componenet = findByAttr(wrapper, 'component-congrats');
	expect(componenet.length).toBe(1);
});
it('renders no text when `success` props is false', () => {
	const wrapper = setup({ success: false });
	const componenet = findByAttr(wrapper, 'component-congrats');
	expect(componenet.text()).toBe('');
});
it('renders non-empty congrats message when `success` props is true', () => {
	const wrapper = setup({ success: true });
	const componenet = findByAttr(wrapper, 'component-congrats');
	expect(componenet.text()).not.toBe(0);
});
it('does not throw warning with expected props', () => {
	const expectedProps = { success: false };
	checkProps(Congrats, expectedProps);
});

import checkPropTypes from 'check-prop-types';
//import rootReducer from "../src/reducers";
import { createStore } from 'redux';

// export const storeFactory = initialState => {
//   return createStore(rootReducer, initialState);
// };

export const findByAttr = (wrapper, attr) => wrapper.find(`[data-test='${attr}']`);

export const checkProps = (component, conformingProps) => {
	const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name);
	expect(propError).toBeUndefined();
};

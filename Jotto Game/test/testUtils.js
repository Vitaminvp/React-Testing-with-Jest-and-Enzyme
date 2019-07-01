import checkPropTypes from 'check-prop-types';
import rootReducer from '../src/reducers';
import { createStore, applyMiddleware } from 'redux';
import { middlewares } from '../src/configureStore';

export const storeFactory = (initialState) => {
	const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
	return createStoreWithMiddleware(rootReducer, initialState);
};

export const findByAttr = (wrapper, attr) => wrapper.find(`[data-test='${attr}']`);

export const checkProps = (component, conformingProps) => {
	const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name);
	expect(propError).toBeUndefined();
};

import { actionTypes } from '../actions';
import successReducer from './successReducer';

it('return default initial state of false then no action is paseed', () => {
	const newState = successReducer();
	expect(newState).toBe(false);
});

it('return  state of true then action type SUCCES_GUESS passed', () => {
	const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS });
	expect(newState).toBe(true);
});

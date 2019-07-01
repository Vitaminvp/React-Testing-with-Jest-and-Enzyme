import { correctGuess, actionTypes } from '.';

describe('correct guess', () => {
	it("return an action with type 'correctGuess'", () => {
		const action = correctGuess();
		expect(action.type).toBe(actionTypes.CORRECT_GUESS);
		expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
	});
});

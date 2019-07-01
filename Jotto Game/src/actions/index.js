export const actionTypes = {
	CORRECT_GUESS: 'CORRECT_GUESS'
};

export const correctGuess = () => {
	return { type: actionTypes.CORRECT_GUESS };
};

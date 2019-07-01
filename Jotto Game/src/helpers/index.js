export const getLetterMatchCount = (guessedWord, secretWord) => {
	const guessedWordSet = new Set(guessedWord.split(''));
	const secretWordSet = new Set(secretWord.split(''));
	return [ ...guessedWordSet ].filter((letter) => secretWordSet.has(letter)).length;
};

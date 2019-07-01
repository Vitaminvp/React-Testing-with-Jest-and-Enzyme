import { getLetterMatchCount } from './';

describe('getLetterMatchCount', () => {
	const secretWord = 'party';
	it('return correct count when there are no matches', () => {
		const letterMatchCount = getLetterMatchCount('bones', secretWord);
		expect(letterMatchCount).toBe(0);
	});

	it('return correct count when there are 3 matches letter', () => {
		const letterMatchCount = getLetterMatchCount('train', secretWord);
		expect(letterMatchCount).toBe(3);
	});

	it('return correct count when there are dublicate letter in the guess', () => {
		const letterMatchCount = getLetterMatchCount('parka', secretWord);
		expect(letterMatchCount).toBe(3);
	});
});

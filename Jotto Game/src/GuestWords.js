import React from "react";
import PropTypes from "prop-types";

const GuestWords = props => {
    let contents;
    if(props.guessedWords.length === 0 ){
        contents = <span data-test="component-guest-instruction" >
            Try to guess the secret word!
        </span>;
    } else {
        const guessedWordsRows = props.guessedWords.map((word, index) => (
            <tr data-test="guessed-word" key={index}>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
            </tr>
            )
        );
        contents = (
            <div data-test="guessed-words">
                <h3>Guessed words!!!</h3>
                <table>
                    <thead>
                        <tr>Guess</tr><tr>Matching Letters</tr>
                        {guessedWordsRows}
                    </thead>
                </table>
            </div>
        )
    }

  return <div data-test="component-guest-words">
      {contents}
  </div>;
};
GuestWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
      PropTypes.shape({
          guessedWord: PropTypes.string.isRequired,
          letterMatchCount: PropTypes.number.isRequired,
      }).isRequired,
  )
};

export default GuestWords;

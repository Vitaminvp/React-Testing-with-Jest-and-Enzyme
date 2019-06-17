import React from "react";
import PropTypes from "prop-types";

const GuestWords = props => {
    let contents;
    if(props.guessedWords.length === 0 ){
        contents = <span data-test="component-guest-instruction" >
            Try to guess the secret word!
        </span>;
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

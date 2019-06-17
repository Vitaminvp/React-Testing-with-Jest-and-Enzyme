import React from "react";
import PropTypes from "prop-types";

const Congrats =  props => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="component-message">Congratulations!!!</span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};
Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;


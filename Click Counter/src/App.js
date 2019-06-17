import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    counter: 0,
    errMessage: false
  };
  handleIncrementButtonClick = () => {
    this.setState({
      counter: this.state.counter + 1,
      errMessage: false
    });
  };
  handleDecrementButtonClick = () => {
    if(this.state.counter > 0){
      this.setState({ counter: this.state.counter - 1 });
    }
    else{
      this.setState({ errMessage: true});
    }

  }
  render() {
    const { counter, errMessage } = this.state;
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is {counter}</h1>
        {errMessage&&<h2 data-test="error-message" style={{color: "red"}}>The counter can't go below zero</h2>}
        <button
          data-test="increment-button"
          onClick={this.handleIncrementButtonClick}
        >
          Increment counter
        </button>
        <button
          data-test="decrement-button"
          onClick={this.handleDecrementButtonClick}
        >
          Decrement counter
        </button>
      </div>
    );
  }
}

export default App;

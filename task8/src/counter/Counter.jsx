import React from "react";
import "./style.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  inCrementCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + this.props.increase || prevState.counter + 1,
    }));
  };

  decrementCrementCounter = () => {
    if (this.state.counter > 0) {
      this.setState((prevState) => ({
        counter: prevState.counter - this.props.increase,
      }));
    }
  };

  render() {
    return (
      <div className="counter">
        <p className="counter-content">{this.state.counter}</p>
        <button
          onClick={this.decrementCrementCounter}
          className="counter-button background-red"
        >
          -
        </button>
        <button
          onClick={this.inCrementCounter}
          className="counter-button background-green"
        >
          +
        </button>
        <p>{this.state.inputValue}</p>
      </div>
    );
  }
}

export default Counter;

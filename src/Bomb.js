import React, { Component } from "react";

export default class Bomb extends Component {
  constructor(props) {
    super();
    this.state = {
      secondsLeft: props.initialCount,
    };
  }
  decrement = () => {
    this.setState({
      secondsLeft: this.state.secondsLeft - 1,
    });
  };
  render() {
    return (
      <div>
        {this.state.secondsLeft > 0
          ? `${this.state.secondsLeft} seconds left before I go boom!`
          : "Boom!"}
      </div>
    );
  }
}

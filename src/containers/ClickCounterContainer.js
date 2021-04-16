import React, { Component } from "react";
import ClickCounter from "../components/ClickCounter/ClickCounter";
import Visualizer from "../components/Visualizer/Visualizer";

export default class ClickCounterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { clicks: 0, lastClickTime: "0" };
  }

  onClick = () => {
    var date = new Date().toLocaleTimeString();
    this.setState({ clicks: this.state.clicks + 1 });
    this.setState({ lastClickTime: date });
  };

  render() {
    return (
      <div>
        <ClickCounter clicked={this.onClick} />
        <Visualizer
          clicksCount={this.state.clicks}
          lastClickTime={this.state.lastClickTime}
        />
      </div>
    );
  }
}

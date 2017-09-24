import React from "react";

import MrBombastic from "./MrBombastic";

class MrBombasticContainer extends React.PureComponent {
  state = {
    ticks: 0,
    ticksStyle: 0,
    backgroundColor: "red",
    textColor: "yellow"
  };

  tick = () => {
    this.setState({ state: this.state.ticks++ });
  };

  resetTick = () => {
    this.setState({ ticks: 0 });
  };

  tickStyle = () => {
    this.setState({ state: this.state.ticksStyle++ });
    this.changeBoomStyle();
  };

  changeBoomStyle = () => {
    if (this.state.ticksStyle % 2 === 0) {
      this.setState({ backgroundColor: "red", textColor: "yellow" });
    } else {
      this.setState({ backgroundColor: "yellow", textColor: "red" });
    }
  };

  componentDidMount = () => {
    this.ticksInterval = setInterval(() => this.tick(), 1);
    this.ticksStyleInterval = setInterval(() => this.tickStyle(), 100);
  };

  componentWillUnmount = () => {
    clearInterval(this.ticksInterval);
    clearInterval(this.ticksStyleInterval);
  };

  render = () => {
    return (
      <MrBombastic
        ticks={this.state.ticks}
        resetTick={this.resetTick}
        backgroundColor={this.state.backgroundColor}
        textColor={this.state.textColor}
      />
    );
  };
}

export default MrBombasticContainer;

(() => {
  window.MrBombasticContainer = MrBombasticContainer;
})();

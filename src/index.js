import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

import { initialState } from "./helpers/initialState";
import { randomNumber, lowerNumber, higherNumber } from "./helpers/randomNumber";
import Options from "./components/getOptions/getOptions";
import GetColors from "./components/getColors/getColors";
import DisplayColors from "./components/displayColors/displayColors";

class App extends React.Component {
  state = initialState;

  // Call different functions depending on option in the state
  // this is set in setOption.
  // This could be moved to ./helpers but staying here for now.
  setColorValue = (option, selected) => {
    return option === selected ? higherNumber() : option !== selected && selected ? lowerNumber() : randomNumber();
  };

  // Set the red, green and blue values in the state
  // depending on the option set in setOption.
  // After this, a callback function will update the
  // color target color array in the state
  setRandomNumber = event => {
    const { setColorValue } = this;
    const { option } = this.state;
    const target = event.target.name;
    this.setState(
      {
        red: setColorValue(option, "red"),
        green: setColorValue(option, "green"),
        blue: setColorValue(option, "blue")
      },
      () => {
        const { red, green, blue } = this.state;
        const colors = [red, green, blue];
        this.setState({
          [target]: colors
        });
      }
    );
  };

  // Set the option value in the state
  // this will be used in the setColorValue function
  setOption = event => this.setState({ option: event.target.name });

  render() {
    const { setRandomNumber, setOption } = this;
    const { option, firstColor, secondColor } = this.state;
    const colorNames = ["red", "green", "blue"];
    return (
      <>
        <Options options={colorNames} selected={option} setOption={setOption} />
        <GetColors getRandomNumber={setRandomNumber} />
        <DisplayColors firstColor={firstColor} secondColor={secondColor} />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.register();

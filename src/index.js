import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { randomNumber, lowerNumber, higherNumber, initialState } from "./helpers/helper";
import SetOption from "./components/setOption/setOption";
import GetColor from "./components/getColor/getColor";
import "./index.css";
import DisplayColor from "./components/displayColor/displayColor";

class App extends React.Component {
  state = initialState;

  // decide if the value should use the higher, lower or default random number function
  redValue = option =>
    option === "red"
      ? higherNumber()
      : option !== "red" && option !== null
      ? lowerNumber()
      : randomNumber();
  greenValue = option =>
    option === "green"
      ? higherNumber()
      : option !== "green" && option !== null
      ? lowerNumber()
      : randomNumber();
  blueValue = option =>
    option === "blue"
      ? higherNumber()
      : option !== "blue" && option !== null
      ? lowerNumber()
      : randomNumber();

  setRandomNumber = event => {
    const target = event.target.name;
    const { redValue, greenValue, blueValue } = this;
    const { option } = this.state;
    this.setState(
      {
        red: redValue(option),
        green: greenValue(option),
        blue: blueValue(option)
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

  setOption = event => this.setState({ option: event.target.name });

  setSelected = id => this.setState({ selected: id });

  render() {
    const { setOption, setRandomNumber, setSelected } = this;
    const { option, firstColor, secondColor, selected } = this.state;
    const colorNames = ["red", "green", "blue"];
    return (
      <>
        <SetOption options={colorNames} selected={option} setOption={setOption} />
        <DisplayColor
          firstColor={firstColor}
          secondColor={secondColor}
          copied={selected}
          setSelected={setSelected}
        />
        <GetColor setNumber={setRandomNumber} />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.register();

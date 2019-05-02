import { randomNumber } from "./randomNumber";

const firstRedValue = randomNumber();
const firstGreenValue = randomNumber();
const firstBlueValue = randomNumber();
const secondRedValue = randomNumber();
const secondGreenValue = randomNumber();
const secondBlueValue = randomNumber();

export const initialState = {
  red: firstRedValue,
  green: firstGreenValue,
  blue: firstBlueValue,
  firstColor: [firstRedValue, firstGreenValue, firstBlueValue],
  secondColor: [secondRedValue, secondGreenValue, secondBlueValue],
  option: null,
  selected: null
};

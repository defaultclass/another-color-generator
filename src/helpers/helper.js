export const randomNumber = () => Math.floor(Math.random() * 255);
export const lowerNumber = () => Math.floor(randomNumber() * 0.4);
export const higherNumber = () => Math.floor(120 + Math.random() * 135);

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
  option: null,
  firstColor: [firstRedValue, firstGreenValue, firstBlueValue],
  secondColor: [secondRedValue, secondGreenValue, secondBlueValue],
  selected: null
};

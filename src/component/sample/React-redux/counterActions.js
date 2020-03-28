import {ADD_NUMBER, REDUCE_NUMBER} from "./actionsType";

export function addNumber(number) {
  return {
    type: ADD_NUMBER,
    number,
  };
}

export function reduceNumber(number) {
  return {
    type: REDUCE_NUMBER,
    number,
  };
}

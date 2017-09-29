import * as actionTypes from './actionTypes';

export function dummieAction(text) {
  return {
    type: actionTypes.DUMMIE_ACTION,
    payload: text,
  };
}

export function dummieActionTwo(obj) {
  return {
    type: actionTypes.DUMMIE_ACTION_TWO,
    payload: obj,
  };
}

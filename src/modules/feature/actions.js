// @flow

import * as actionTypes from './actionTypes';

import type { DUMMIE_ACTION, DUMMIE_ACTION_TWO } from './model';

export function dummieAction(text: string): DUMMIE_ACTION {
  return {
    type: actionTypes.DUMMIE_ACTION,
    payload: text,
  };
}

export function dummieActionTwo(num: number): DUMMIE_ACTION_TWO {
  return {
    type: actionTypes.DUMMIE_ACTION_TWO,
    payload: num,
  };
}

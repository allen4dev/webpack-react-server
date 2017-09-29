// @flow

import * as actionTypes from './actionTypes';

// types

export type STATE = {
  text: string,
  number: number,
};

export type DUMMIE_ACTION = {
  type: actionTypes.DUMMIE_ACTION,
  payload: string,
};

export type DUMMIE_ACTION_TWO = {
  type: actionTypes.DUMMIE_ACTION_TWO,
  payload: number,
};

export type Action = DUMMIE_ACTION | DUMMIE_ACTION_TWO;

// feature stuff
export const INITIAL_STATE: STATE = {
  text: '',
  number: 0,
};

export const some = 2;

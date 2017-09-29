// @flow

import { combineReducers } from 'redux';

import * as actionTypes from './actionTypes';

import { INITIAL_STATE } from './model';
import type { Action } from './model';

function textReducer(state: string = INITIAL_STATE.text, action: Action) {
  switch (action.type) {
    case actionTypes.DUMMIE_ACTION:
      return action.payload;

    default:
      return state;
  }
}

function numberReducer(state: number = INITIAL_STATE.number, action: Action) {
  switch (action.type) {
    case actionTypes.DUMMIE_ACTION_TWO:
      return action.payload;

    default:
      return state;
  }
}

const reducer = combineReducers({
  text: textReducer,
  number: numberReducer,
});

export default reducer;

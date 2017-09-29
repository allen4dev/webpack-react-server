import { combineReducers } from 'redux';

import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
  text: '',
};

function textReducer(state = INITIAL_STATE.text, action) {
  switch (action.type) {
    case actionTypes.DUMMIE_ACTION:
      return action.payload;

    default:
      return state;
  }
}

const reducer = combineReducers({
  text: textReducer,
});

export default reducer;

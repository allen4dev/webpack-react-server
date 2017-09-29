import reducer from './../reducer';
import * as actions from './../actions';

import { INITIAL_STATE } from './../model';

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

test('should handle DUMMIE_ACTION', () => {
  const text = 'Simple test for reducer';

  expect(reducer(INITIAL_STATE, actions.dummieAction(text))).toEqual({
    ...INITIAL_STATE,
    text,
  });
});

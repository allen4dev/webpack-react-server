import * as actionTypes from './../actionTypes';
import * as actions from './../actions';

test('should create a dummie action', () => {
  const text = 'A simple test for a DUMMIE_ACTION';

  const expectedAction = {
    type: actionTypes.DUMMIE_ACTION,
    payload: text,
  };

  expect(actions.dummieAction(text)).toEqual(expectedAction);
});

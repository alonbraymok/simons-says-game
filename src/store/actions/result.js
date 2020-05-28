import {SET_RESULTS} from '../actions.type/results';

export const setResults = (results) => async (dispatch, getState) => {
  console.log('action', results);
  dispatch({
    type: SET_RESULTS,
    payload: results,
  });
};

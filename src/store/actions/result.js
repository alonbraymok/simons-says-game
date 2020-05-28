import {SET_RESULTS} from '../actions.type/results';

export const setResults = (results) => async (dispatch, getState) => {
  dispatch({
    type: SET_RESULTS,
    payload: results,
  });
};

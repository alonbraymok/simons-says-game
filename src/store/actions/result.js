import {SET_RESULTS} from '../actions.type/results';

export const setResults = (results) => async (dispatch) => {
  dispatch({
    type: SET_RESULTS,
    payload: results,
  });
};

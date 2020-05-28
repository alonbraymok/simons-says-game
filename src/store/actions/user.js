import { SET_USER } from "../actions.type";

export const setUser = (user) => async (dispatch, getState) => {
  dispatch({
    type: SET_USER,
    payload: user,
  });
};

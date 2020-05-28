import {SET_RESULTS} from '../actions.type/results';

const INITIAL_STATE = {
  results: [],
};

const resultReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_RESULTS:
      return {...state, results: action.payload};

    default:
      break;
  }
  return state;
};

export default resultReducer;

import {SET_USER} from '../actions.type/user';

const INITIAL_STATE = {
  user: ['userrrrrr'],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return {...state, user: action.payload};

    default:
      break;
  }
  return state;
};

export default userReducer;

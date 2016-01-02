import { fromJS } from 'immutable';
const SET_USER_INFO = 'SET_USER_INFO';

export const userInfo = (state = {}, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return action.info;
    default:
      return state;
  }
};

import { fromJS } from 'immutable';
const SET_USER_INFO = 'SET_USER_INFO';
const LOG_OUT = 'LOG_OUT';

export const userInfo = (state = {}, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return action.info;
    case LOG_OUT:
      return {};
    default:
      return state;
  }
};

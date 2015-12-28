import { fromJS } from 'immutable';

export const userInfo = (state = fromJS({
  email: 'a@example.com',
  name: 'A'
}), action) => {
  return state;
};

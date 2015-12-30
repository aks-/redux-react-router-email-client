import { fetchUnread } from '../lib/fetchDocuments';

const GET_UNREAD = 'GET_UNREAD';

export const unread = (state = 0, action) => {
  switch (action.type) {
    case GET_UNREAD:
      return action.unread
    default:
      return state;
  }
};

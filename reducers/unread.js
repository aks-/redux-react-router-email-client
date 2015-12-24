import { fetchUnread } from '../lib/fetchDocuments';

export const unread = (state = fetchUnread('a@example.com'), action) => {
  return state;
};

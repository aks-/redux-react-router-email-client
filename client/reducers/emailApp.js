import { combineReducers } from 'redux';
import {
  Map,
  List,
  fromJS
} from 'immutable';
import { routeReducer } from 'redux-simple-router';
import generateRandomString from '../lib/generateRandomString';
import { loggedIn } from './loggedIn';
import { emails } from './emails';
import { boxSelector } from './boxSelector';
import { emailSelector } from './emailSelector';
import { unread } from './unread';
import { userInfo } from './userInfo';
import { modalDisplay } from './modalDisplay';

export const emailApp = combineReducers({
  loggedIn,
  selectedEmailIndex: emailSelector,
  selectedBox: boxSelector,
  userInfo,
  emails,
  unread,
  modalDisplay,
  routing: routeReducer
});

import { combineReducers } from 'redux';
import {
  Map,
  List,
  fromJS
} from 'immutable';
import generateRandomString from '../lib/generateRandomString';
import { emails } from './emails';
import { boxSelector } from './selectBox';
import { emailSelector } from './emailSelector';
import { unread } from './unread';
import { userInfo } from './userInfo';

export const emailApp = combineReducers({
  selectedEmailIndex: emailSelector,
  selectedBox: boxSelector,
  userInfo,
  emails,
  unread
});

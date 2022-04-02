import article from './modules/article';
import articleList from './modules/articleList';
import auth from './modules/auth';
import { combineReducers } from 'redux';
import common from './modules/common';
import editor from './modules/editor';
import home from './modules/home';
import profile from './modules/profile';
import settings from './modules/settings';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  article,
  articleList,
  auth,
  common,
  editor,
  home,
  profile,
  settings,
  router: routerReducer
});
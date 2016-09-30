import { combineReducers } from 'redux';
import toggle from './toggle';
import rssFeed from './rssFeed';
import addButtonClick from './addButtonClick';

const todoApp = combineReducers({
  toggle,
  rssFeed,
  addButtonClick,
});

export default todoApp;

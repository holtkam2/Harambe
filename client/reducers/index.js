import { combineReducers } from 'redux';
import toggle from './toggle';
import rssFeed from './rssFeed';

const todoApp = combineReducers({
  toggle,
  rssFeed,
});

export default todoApp;

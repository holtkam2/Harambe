import { combineReducers } from 'redux';
import toggle from './toggle';
import rssFeed from './rssFeed';
import addButtonClick from './addButtonClick';

const reducers = combineReducers({
  toggle,
  rssFeed,
  addButtonClick,
});

export default reducers;

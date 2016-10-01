import { combineReducers } from 'redux';
import toggle from './toggle';
import rssFeed from './rssFeed';
import addButtonClick from './addButtonClick';
import addURLClick from './addURLClick';

const reducers = combineReducers({
  toggle,
  rssFeed,
  addButtonClick,
  addURLClick,
});

export default reducers;

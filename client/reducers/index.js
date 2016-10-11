import { combineReducers } from 'redux';
import toggle from './toggle';
import rssFeed from './rssFeed';
import currentUser from './currentUser';
import addButtonClick from './addButtonClick';
import RSSFeedList from './RSSFeedList';
import sentiState from './sentiState';

const reducers = combineReducers({
  toggle,
  rssFeed,
  currentUser,
  addButtonClick,
  RSSFeedList,
  sentiState,
});

export default reducers;

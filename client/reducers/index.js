import { combineReducers } from 'redux';
import toggle from './toggle';

const todoApp = combineReducers({
  toggle,
});

export default todoApp;

import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import toggle from './toggle';

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  toggle,
});

export default todoApp;

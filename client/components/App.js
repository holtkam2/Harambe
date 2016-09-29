import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Setting from '../containers/SettingContainer';
import SettingDisp from './SettingDisp';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Setting />
    <SettingDisp />
    <Footer />
  </div>
)

export default App

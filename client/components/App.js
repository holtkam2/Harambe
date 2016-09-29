import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Setting from '../containers/SettingContainer';
import SettingDisp from '../containers/SettingsDispContainer.js';
import RSSTicker from './RSSTicker';

const App = () => (
  <div>
    <RSSTicker />
    <AddTodo />
    <VisibleTodoList />
    <Setting />
    <SettingDisp />
    <Footer />
  </div>
)

export default App;

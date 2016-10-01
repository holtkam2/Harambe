import React from 'react';
import Setting from '../containers/SettingContainer';
import SettingDisp from '../containers/SettingsDispContainer.js';
import RSSHolder from '../containers/RSSHolder';
import SearchBar from '../components/SearchBar';
import ButtonList from '../components/ButtonList';

const App = () => (
  <div>
    <RSSHolder />
    <SearchBar />
    <ButtonList />
    <Setting />
    <SettingDisp />
  </div>
);

export default App;

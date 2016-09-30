import React from 'react';
import Setting from '../containers/SettingContainer';
import SettingDisp from '../containers/SettingsDispContainer.js';
import RSSTicker from './RSSTicker';

const App = () => (
  <div>
    <RSSTicker />
    <Setting />
    <SettingDisp />
  </div>
);

export default App;

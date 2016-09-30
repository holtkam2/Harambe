import React from 'react';
import Setting from '../containers/SettingContainer';
import SettingDisp from '../containers/SettingsDispContainer.js';
import RSSHolder from '../containers/RSSHolder';

const App = () => (
  <div>
    <RSSHolder />
    <Setting />
    <SettingDisp />
  </div>
);

export default App;

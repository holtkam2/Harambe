import React from 'react';
import Setting from '../containers/SettingContainer';
import SettingDisp from '../containers/SettingsDispContainer.js';
import RSSHolder from '../containers/RSSHolder';
import SearchBar from '../components/SearchBar';
import ButtonListContainer from '../containers/ButtonListContainer';
import LinkButton from '../components/LinkButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import ThemeButton from '../components/ThemeButton.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const App = () => (
<<<<<<< 5b3cf64d99346768297f8b340183b17c1bb10ac0
  <MuiThemeProvider>
    <div>
      <RSSHolder />
      <SearchBar />
      <ButtonListContainer />
      <Setting />
      <ThemeButton />
      <SettingDisp />
    </div>
  </MuiThemeProvider>
=======
  <div>
    <RSSHolder />
    <SearchBar />
    <ButtonList />
    <Setting />
    <SettingDisp />
  </div>
>>>>>>> add URL click now passes a url and a button name to reducer
);

export default App;

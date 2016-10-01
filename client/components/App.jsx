import React from 'react';
import Setting from '../containers/SettingContainer';
import SettingDisp from '../containers/SettingsDispContainer.js';
import RSSHolder from '../containers/RSSHolder';
import SearchBar from '../components/SearchBar';
import ButtonList from '../components/ButtonList';
import LinkButton from '../components/LinkButton';
import MagicButton from '../components/MagicButton.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import ThemeButton from '../components/ThemeButton.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <div>
      <RSSHolder />
      <SearchBar />
      <ButtonList />
      <MagicButton urls={['https://www.google.com', 'https://www.yahoo.com', 'https://www.bing.com']} />
      <Setting />
      <ThemeButton />
      <SettingDisp />
    </div>
  </MuiThemeProvider>
);

export default App;

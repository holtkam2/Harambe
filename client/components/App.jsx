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
import Paper from 'material-ui/Paper';
import About from '../components/About';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <div>
      <Paper className="RSSHolder" zDepth={2}>
        <RSSHolder />
      </Paper>
      <Paper className="logo" zDepth={1}>
        <div className="">
          <img className="rotatingImage" src="logo_gfx.png" />
          <img className="logoText" src="logo_text.png" />
        </div>
      </Paper>
      <SearchBar className="SearchBar" />
      <div className="ButtonListContainer">
        <ButtonListContainer />
      </div>
      <Setting />
      <SettingDisp />
      <About />
      <ThemeButton />
    </div>
  </MuiThemeProvider>
);

export default App;

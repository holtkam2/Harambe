import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Paper from 'material-ui/Paper';
// import Setting from '../containers/SettingContainer';
import SettingsDispContainer from '../containers/SettingsDispContainer';
import RSSHolder from '../containers/RSSHolder';
import SearchBarContainer from '../containers/searchBarContainer';
import ButtonListContainer from '../containers/ButtonListContainer';
// import LinkButton from '../components/LinkButton';
import About from '../components/About';
import ThemeButton from '../components/ThemeButton.jsx';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <div>
      <Paper className="RSSHolder" zDepth={2}>
        <RSSHolder />
      </Paper>

      <div className="logo">
        <img className="rotatingImage" src="./assets/logo/logo_gfx.png" alt="S" />
        <img className="logoText" src="./assets/logo/logo_text.png" alt="swick" />
      </div>

      <SearchBarContainer className="SearchBar" />
      <div className="ButtonListContainer">
        <ButtonListContainer />
      </div>
      <SettingsDispContainer />
      <About />
      <ThemeButton />
    </div>
  </MuiThemeProvider>
);

export default App;

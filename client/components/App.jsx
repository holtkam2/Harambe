import React from 'react';
import ButtonList from './ButtonList.jsx';
import RSSFeedList from './RSSFeedList.jsx';
import NotificationList from './NotificationList.jsx';
import SearchBar from './SearchBar.jsx';
import SettingsButton from './SettingsButton.jsx';

const App = () =>
  (
  <div>
    <div><RSSFeedList /></div>
    <div><NotificationList /></div>
    <h1 className="greeting">Welcome, (user name here)</h1>
    <div><SearchBar /></div>
    <div><ButtonList /></div>
    <div id="settings" />
    <div><SettingsButton /></div>
  </div>
);

import ReactDOM, { render } from 'react-dom'; //eslint-disable-line
// import { render } from 'react-dom';

// render the 'app' component to the DOM
ReactDOM.render(<App />, document.getElementById('app')); //eslint-disable-line

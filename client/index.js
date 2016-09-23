// React
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';

// Components
import App from './components/App.jsx';
import ButtonList from './components/ButtonList.jsx';
import Button from './components/Button.jsx';
import RSSFeedList from './components/RSSFeedList.jsx';
import RSSFeed from './components/RSSFeed.jsx';
import NotificationList from './components/NotificationList.jsx';
import Notification from './components/Notification.jsx';
import SearchBar from './components/SearchBar.jsx';
import SettingsButton from './components/SettingsButton.jsx';

// render the 'app' component to the DOM
ReactDOM.render(<App />,document.getElementById("app"));
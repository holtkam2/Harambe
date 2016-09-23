import React from 'react';
import ButtonList from './ButtonList.jsx';
import RSSFeedList from './RSSFeedList.jsx';
import NotificationList from './NotificationList.jsx';
import SearchBar from './SearchBar.jsx';
import SettingsButton from './SettingsButton.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: null,
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <div><RSSFeedList /></div>
        <div><NotificationList /></div>
        <h1 className="greeting">Welcome, (user name here)</h1>
        <div><SearchBar /></div>
        <div><ButtonList /></div>
        <div><SettingsButton /></div>
      </div>
    );
  }

}

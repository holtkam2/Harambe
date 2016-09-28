import ButtonList from './ButtonList.jsx';
import RSSFeedList from './RSSFeedList.jsx';
import NotificationList from './NotificationList.jsx';
import SearchBar from './SearchBar.jsx';
import SettingsButton from './SettingsButton.jsx';


import settingsButtonReducer from '../reducers/settingsButtonReducer';

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import ReactDOM, { render } from 'react-dom';
const store = createStore(settingsButtonReducer);
const rootEl = document.getElementById('app');

const App = () =>
  (
  <div>
    <div><RSSFeedList /></div>
    <div><NotificationList /></div>
    <h1 className="greeting">Welcome, (user name here)</h1>
    <div><SearchBar /></div>
    <div><ButtonList /></div>

    <div id="settings" className = "settings"/>
    <div><SettingsButton value={store.getState()} toggleSubmit={() => store.dispatch({ type: 'TOGGLE_SETTINGS' })} /></div>
  </div>
);


// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('app')
// );

const render = () => ReactDOM.render(
  <App
    value={store.getState()}
    toggleSubmit={() => store.dispatch({ type: 'TOGGLE_SETTINGS' })}
  />,
  rootEl
)

render()
store.subscribe(render)

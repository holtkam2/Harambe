/* eslint-env browser*/

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// Reducer
const App = (currentState = [{ displaySettings: false }], action) => {
  switch (action.type) {
    case 'TOGGLE_SETTINGS':
      return [
        {
          displaySettings: !currentState[0].displaySettings,
        },
      ];

    default:
      return currentState;
  }
};

const store = createStore(App);

const SettingsButton = () => (

  <div className="settingsButton">
    <button
      onClick={() => store.dispatch({
        type: 'TOGGLE_SETTINGS',
      })}
    >Settings</button>
  </div>

);

export default SettingsButton;

store.subscribe(() => {
  const currentState = store.getState();
  console.log(currentState[0].displaySettings);
  if (currentState[0].displaySettings === true) {
    ReactDOM.render(<div>Settings!!!1</div>, document.getElementById('settings'));
  }
});

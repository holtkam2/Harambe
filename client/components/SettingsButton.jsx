import React from 'react';

const { createStore } = Redux;

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

// Reducer
const App = (currentState = [{ displaySettings: false }], action) => {
  switch (action.type) {
    case 'TOGGLE_SETTINGS':

      let tester = false;

      if (currentState[0].displaySettings === false) {
        tester = true;
      } else {
        tester = false;
      }
      const nextState = [

        {
          displaySettings: tester,
        },
      ];
      return nextState;
    break;

    default:
      return currentState;
  }
};

const store = createStore(App);

store.subscribe(() => {
  const currentState = store.getState();
  console.log(currentState[0].displaySettings);
  if (currentState[0].displaySettings === true) {
    ReactDOM.render(<div>Settings!!!1</div>, document.getElementById('settings'));
  }
});
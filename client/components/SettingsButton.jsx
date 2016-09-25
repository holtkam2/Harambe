import React from 'react';

const { createStore } = Redux;

const SettingsButton = () => (

  <div className="settingsButton">
    <button onClick={() => store.dispatch({
      type: 'TOGGLE_SETTINGS'
    })}>Settings</button>
  </div>

);

export default SettingsButton;

// Reducer
const App = (currentState = {displaySettings: false}, action) => {
  switch (action.type) {

    case 'TOGGLE_SETTINGS':
      if (currentState.displaySettings === false){
        return [
          {displaySettings: true}
        ]
      } else {
        return [
          {displaySettings: false}
        ]
      }

    default:
      return currentState
  }

}

const store = createStore(App)

store.subscribe(() => {
  var currentState = store.getState()
  console.log(currentState[0].displaySettings)
  if (currentState[0].displaySettings === true){
    ReactDOM.render(<div>Settings!!!1</div>, document.getElementById('settings'))
  }
})








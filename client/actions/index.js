/* global $ */

const gotState = res => ({
  type: 'GET_STATE_FROM_SERVER',
  payload: res,
});

export function addButton(formInput) {
  return {
    type: 'ADD_BUTTON_CLICK',
    payload: formInput,
  };
}

export function toggleSettings() {
  return {
    type: 'SETTINGS_TOGGLE',
  };
}

export function addURL(Button, URL) {
  return {
    type: 'ADD_URL_CLICK',
    payload: [Button, URL],
  };
}

export function updateStateFromServer() {
  return (dispatch) => {
    $.get('api/state')
    .then((res) => {
      dispatch(gotState(res));
    })
    .catch((err) => {
      console.error(err);
    });
  };
}

export function setInitialState(data) {
  return {
    type: 'SET_INITIAL_STATE',
    payload: data,
  };
}

export function deleteButton(button) {
  return {
    type: 'DELETE_BUTTON',
    payload: button,
  };
}

export function addRssFeedSelection (selection) {
  console.log("The reducer isn't been set up yet! Jason still has to do that.")
  console.log("For now this action just dispatches SETTINGS_TOGGLE")
  console.log("Here's your selection: ", selection)
  return {
    type:'SETTINGS_TOGGLE'
  }
}


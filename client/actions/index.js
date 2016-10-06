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

export function addInterest(interestName) {
  return {
    type: 'ADD_INTEREST_CLICK',
    payload: interestName,
  };
}

export function addRSSFeedToInterest(RSSFeedURL, interestName) {
  return {
    type: 'ADD_RSSFEED_TO_INTEREST',
    payload: [RSSFeedURL, interestName],
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


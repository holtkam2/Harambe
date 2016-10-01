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

export function addURL(URL, Button ) {
  return {
    type: 'ADD_URL_CLICK',
    payload: [URL, Button],
  }
}
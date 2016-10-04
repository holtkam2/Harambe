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
  }
}

export function updateStateFromServer(){
  return (dispatch) => {
    $.get('api/state')
    .then(res => {
      dispatch(gotState(res))
    })
    .catch(err => {
      console.error(err)
    })
  }
}

const gotState = (res) => {
  return {
    type:'GET_STATE_FROM_SERVER',
    payload: res,
  }
}


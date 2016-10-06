const addButtonClick = (state = {
  buttons: {},
}, action) => {
  const newState = { ...state };
  const buttonToDelete = action.payload;
  switch (action.type) {
    case 'ADD_BUTTON_CLICK':
      newState.buttons[action.payload] = [];
      return newState;

    case 'ADD_URL_CLICK':
      state.buttons[action.payload[0]].push(action.payload[1]);
      return newState;

    case 'GET_STATE_FROM_SERVER':
      newState.userName = action.payload.user.userName;
      return newState;

    case 'SET_INITIAL_STATE':
      newState.buttons = action.payload.buttons;
      return newState;

    case 'DELETE_BUTTON':
      delete newState.buttons[buttonToDelete];
      return newState;

    default:
      return state;
  }
};

export default addButtonClick;

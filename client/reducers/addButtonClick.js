const addButtonClick = (state = {
  buttons:
  { test: ['www.google.com', 'cnn.com'],
    testBtn2: ['www.hn.com', 'www.bing.com'],
  },
}, action) => {

  switch (action.type) {
    case 'ADD_BUTTON_CLICK':
      state.buttons[action.payload] = [];
      return { ...state };

    case 'ADD_URL_CLICK':
      state.buttons[action.payload[0]].push(action.payload[1]);
      return { ...state };

    case 'GET_STATE_FROM_SERVER':
      state.userName = action.payload.user.userName;
      return { ...state };

    default:
      return state;
  }
};

export default addButtonClick;

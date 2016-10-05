const addButtonClick = (state = {
  buttons:
  { test: ['www.google.com', 'cnn.com'],
    testBtn2: ['www.hn.com', 'www.bing.com'],
  },
}, action) => {
  switch (action.type) {
    case 'ADD_BUTTON_CLICK':
     /* eslint no-param-reassign: ["error", { "props": false }]*/
      state.buttons[action.payload] = [];
      return { ...state };

    case 'ADD_URL_CLICK':
      state.buttons[action.payload[0]].push(action.payload[1]);
      return { ...state };

    /* eslint no-duplicate-case: ["error", {}]*/
    case 'ADD_URL_CLICK':
      return { ...state };

    case 'GET_STATE_FROM_SERVER':
      state.userName = action.payload.user.userName;
      return { ...state };

    case 'GET_STATE_FROM_SERVER':
      state.userName = action.payload.user.userName;
      return { ...state };

    case 'SET_INITIAL_STATE':
      // console.log("SET_INITIAL_STATE called in the reducer! Here's the action.payload: ");
      // console.log(action.payload);
      state.buttons = action.payload.buttons;
      return { ...state };

    default:
      return state;
  }
};

export default addButtonClick;

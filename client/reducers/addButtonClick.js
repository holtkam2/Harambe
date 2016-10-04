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


    case 'ADD_URL_CLICK':
      return { ...state }

    case 'GET_STATE_FROM_SERVER':
      state.userName = action.payload.user.userName;
      return { ...state };

    case 'GET_STATE_FROM_SERVER':

      // console.log('GET_STATE_FROM_SERVER was called in addButtonClick reducer');
      console.log('The action.payload that was recieved by the reducer: ', action.payload);
      newState.userName = action.payload.user.userName;
      console.log('NEWSTATE', newState);
      return newState;


    default:
      return state;
  }
};

export default addButtonClick;

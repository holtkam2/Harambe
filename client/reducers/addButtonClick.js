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
<<<<<<< d72509c0e20026f90c37e85332b41f6d06b3c8f1

      // console.log('GET_STATE_FROM_SERVER was called in addButtonClick reducer');
      console.log('The action.payload that was recieved by the reducer: ', action.payload);
      newState.userName = action.payload.user.userName;
      console.log('NEWSTATE', newState);
      return newState;
=======
      state.userName = action.payload.user.firstName;
      return { ...state };
>>>>>>> took out some console logs because there were too many and it was confusing


    default:
      return state;
  }
};

export default addButtonClick;

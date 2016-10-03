const addButtonClick = (state = { buttons:
  { test: ['www.google.com', 'cnn.com'],
    testBtn2: ['www.hn.com', 'www.bing.com'] },
 }, action) => {
  console.log('HERE', { ...state });
  const newState = { ...state };
  if (Array.isArray(action.payload)) {
    newState.buttons[action.payload[0]].push(action.payload[1]);
  } else {
    newState.buttons[action.payload] = [];
  }
  switch (action.type) {
    case 'ADD_BUTTON_CLICK':
      console.log('ADDBUTTON');
      return newState;
    case 'ADD_URL_CLICK':
      console.log('ADDURL');
      return newState;
    default:
      return state;
  }
};

export default addButtonClick;

const addButtonClick = (state = { buttons: {} }, action) => {
  console.log('HERE', { ...state });
  const newState = { ...state };
  newState.buttons[action.payload] = [];
  switch (action.type) {
    case 'ADD_BUTTON_CLICK':
      console.log('Reducer activated with payload: ', action.payload);
      return newState;
    default:
      return state;
  }
};

export default addButtonClick;

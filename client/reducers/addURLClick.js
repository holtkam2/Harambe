const addURLClick = (state = false, action) => {
  const newState = { ...state };
  //newState.buttons[action.payload[1]].push(action.payload[0]);
  switch (action.type) {
    case 'ADD_URL_CLICK':
      console.log('Reducer activated with payload: ', action.payload);
      return newState;
    default:
      return state;
  }
};

export default addURLClick;
const addButtonClick = (state = false, action) => {
  switch (action.type) {
    case 'ADD_BUTTON_CLICK':
      console.log('Reducer activated with payload: ', action.payload);
      return {
        ...state,
        buttonName: action.payload,
      };
    default:
      return state;
  }
};

export default addButtonClick;

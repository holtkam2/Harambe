const addURLClick = (state = false, action) => {
  switch (action.type) {

    case 'ADD_URL_CLICK':
      console.log('Reducer activated with payload: ', action.payload);
      return {
        ...state
      };

    default:
      return state;
  }
};

export default addURLClick;
const currentUser = (state = {
  userName: false,
  firstName: false,
}, action) => {
  switch (action.type) {
    case 'GET_STATE_FROM_SERVER':
      return {
        userName: action.payload.user.userName,
        firstName: action.payload.user.firstName,
      };
    default:
      return state;
  }
};

export default currentUser;

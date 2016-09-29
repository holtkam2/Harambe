const toggle = (state = false, action) => {
  switch (action.type) {
    case 'SETTINGS_TOGGLE':
// console.log(state[0]);
      return !state;

    default:
      return state;
  }
};

export default toggle;

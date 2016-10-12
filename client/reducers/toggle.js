const toggle = (state = false, action) => {
  switch (action.type) {
    case 'SETTINGS_TOGGLE':
      return !state;
    default:
      return state;
  }
};

export default toggle;

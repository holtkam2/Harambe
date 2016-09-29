const toggle = (state = [{ displaySetting: false }], action) => {
  switch (action.type) {
    case 'SETTINGS_TOGGLE':
// console.log(state[0]);
      return [
        {
          displaySetting: !state[0].displaySetting,
        },
      ];
    default:
      return state;
  }
};

export default toggle;

const sentiState = (state = {
  anger: 0.57912,
  disgust: 0.085289,
  fear: 0.007593,
  joy: 0.312947,
  sadness: 0.015051,
}, action) => {
  switch (action.type) {
    case 'GET_STATE_FROM_SERVER':
      return action.payload.docEmotions;

    default:
      return state;
  }
};

export default sentiState;

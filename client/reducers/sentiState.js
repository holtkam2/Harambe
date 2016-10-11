const sentiState = (state = {
  anger: '0.2',
  disgust: '0.2',
  fear: '0.2',
  joy: '0.2',
  sadness: '0.2',
}, action) => {
  switch (action.type) {
    case 'GET_STATE_FROM_SERVER':
      return action.payload.docEmotions;

    default:
      return state;
  }
};

export default sentiState;

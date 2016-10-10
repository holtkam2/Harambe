const RSSFeedList = (state = ['news', 'sports'], action) => {
  const newState = [...state];
  switch (action.type) {
    case 'SET_INITIAL_STATE':
      return action.payload.interests;

    case 'ADD_RSS_SELECTION':
      newState.shift();
      newState.push(action.payload);
      return newState;

    default:
      return state;
  }
};

export default RSSFeedList;

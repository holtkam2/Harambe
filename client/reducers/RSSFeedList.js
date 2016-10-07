const RSSFeedList = (state = ["news", "sports"], action) => {
  switch (action.type) {

    case 'ADD_RSS_SELECTION':
      const newState = state;
      newState.shift();
      newState.push(action.payload);
      return newState;

    default:
      return state;
  }
};

export default RSSFeedList;

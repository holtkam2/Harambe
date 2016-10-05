const RSSFeedList = (state = {}, action) => {

  switch (action.type) {
    case 'ADD_INTEREST_CLICK':
      state[action.payload] = [];
      return { ...state };

    case 'ADD_RSSFEED_TO_INTEREST':
      state[action.payload[1]].push(action.payload[0]);
      return { ...state };

    default:
      return state;
  }
};

export default RSSFeedList;

const RSSFeedList = (state = {}, action) => {

  switch (action.type) {
    case 'ADD_INTEREST_CLICK':
      state[action.payload] = [];
      return { ...state };

    case 'ADD_RSSFEED_TO_INTEREST':
      state[action.payload[1]].push(action.payload[0]);
<<<<<<< 25115a1632cb697190367c4b5f40daeb67c6c6a9

=======
>>>>>>> can now add interest names and urls to interest names
      return { ...state };

    default:
      return state;
  }
};

export default RSSFeedList;
<<<<<<< 25115a1632cb697190367c4b5f40daeb67c6c6a9

//it's at the point where the reducer is properly getting the action and the relevant payload info
// it just isn't applying it to state or anything yet.

=======
>>>>>>> can now add interest names and urls to interest names

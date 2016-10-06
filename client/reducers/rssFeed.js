const rssFeed = (state = [{ key: 1, text: 'Salesforce\'s Twitter Buyout May be Stymied by Investor Pressure' },
{ key: 2, text: 'AT&T \'NetBonding\' With Cloud Leaders Amazon, IBM' },
{ key: 3, text: 'Twitter Plunges 19%: More Downside Possible' }], action) => {
  switch (action.type) {
    case 'READ_ALL_RSS':
      return state;
    case 'ADD_RSS':
      return [
        ...state,
        action,
      ];

    // case 'GET_STATE_FROM_SERVER2':
    //   console.log('GET_STATE_FROM_SERVER was called in RSSFeed reducer');
    //   console.log('The action.payload that was recieved by the reducer: ', action.payload);
    //   // newState.userName = action.payload.userName;
    //   // console.log('NEWSTATE', newState);
    //   // return newState;


    // case 'GET_STATE_FROM_SERVER':

    default:
      return state;
  }
};

export default rssFeed;

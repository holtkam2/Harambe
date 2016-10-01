const rssFeed = (state = [{ key: 1, text: 'test feed right here' },
{ key: 2, text: '22' },
{ key: 3, text: '33' }], action) => {
  switch (action.type) {
    case 'READ_ALL_RSS':
      return state;
    case 'ADD_RSS':
      return [
        ...state,
        action,
      ];
    default:
      return state;
  }
};

export default rssFeed;

const rssFeed = (state = {
  sports: ['asd'],
  tech: ["asd'asd"],
  news: ['asdasdasd'],
  finance: ['asddddasdasd'],
  clear: [''],
}, action) => {
  switch (action.type) {
    case 'GET_STATE_FROM_SERVER':
      return action.payload.RSSFeeds;

    default:
      return state;
  }
};

export default rssFeed;

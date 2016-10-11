const rssFeed = (state = {
  sports: ['asd'],
  tech: ["asd'asd"],
  news: ['asdasdasd'],
  finance: ['asddddasdasd'],
  clear: [''],
}, action) => {
  switch (action.type) {
    case 'GET_STATE_FROM_SERVER':
      action.payload.RSSFeeds.tech.splice(40);
      return action.payload.RSSFeeds;

    default:
      return state;
  }
};

export default rssFeed;

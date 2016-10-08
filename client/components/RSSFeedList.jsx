import React, { PropTypes } from 'react';
// import RSSFeed from './RSSFeed.jsx';

const RSSFeedList = ({ rssFeed, chosenRssFeed1, chosenRssFeed2 }) => (
  <div className="RSSFeedList">
    <div
      className="marquee marquee-speed-slow" data-marquee={
        rssFeed
        //rssFeed.chosenRssFeed1.map(feed => feed).join(' * ')
        // .map(feed => feed).join(' * ')
      }
    /><div
      className="marquee" data-marquee={
        rssFeed
        // .map(feed => feed).join(' * ')
      }
    /></div>
);

RSSFeedList.propTypes = {
  rssFeed: PropTypes.objectOf(PropTypes.array),
};

export default RSSFeedList;

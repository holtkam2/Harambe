import React, { PropTypes } from 'react';
// import RSSFeed from './RSSFeed.jsx';

const RSSFeedList = ({ rssFeed }) => (
  <div className="RSSFeedList">
    <div
      className="marquee marquee-speed-slow" data-marquee={
        rssFeed.first.map(feed => feed.text).join(' * ')
      }
    /><div
      className="marquee" data-marquee={
        rssFeed.second.map(feed => feed.text).join(' * ')
      }
    /></div>
);

RSSFeedList.propTypes = {
  rssFeed: PropTypes.objectOf(PropTypes.array),
};

export default RSSFeedList;

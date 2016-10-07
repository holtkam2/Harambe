import React, { PropTypes } from 'react';
// import RSSFeed from './RSSFeed.jsx';

const RSSFeedList = ({ rssFeed }) => (
  <div className="RSSFeedList">
    <div
      className="marquee marquee-speed-slow" data-marquee={
        rssFeed.map(feed => feed.text).join(' * ')
      }
    /><div
      className="marquee" data-marquee={
        rssFeed.map(feed => feed.text).join(' * ')
      }
    /></div>
);

RSSFeedList.propTypes = {
  rssFeed: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RSSFeedList;

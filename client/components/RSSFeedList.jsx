import React, { PropTypes } from 'react';
import RSSFeed from './RSSFeed.jsx';

const RSSFeedList = ({ rssFeed }) => (
  <div className="RSSFeedList">
    <RSSFeed rssFeed={rssFeed[0]} />
    <RSSFeed rssFeed={rssFeed[1]} />
  </div>
);

RSSFeedList.propTypes = {
  rssFeed: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RSSFeedList;

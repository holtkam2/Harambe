import React from 'react';
import RSSFeed from './RSSFeed.jsx';

const RSSFeedList = ({ rssFeed }) => (
  <div className="RSSFeedList">
    <RSSFeed rssFeed={rssFeed[0]} />
    <RSSFeed rssFeed={rssFeed[1]} />
  </div>
);

export default RSSFeedList;

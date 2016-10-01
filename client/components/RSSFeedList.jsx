import React, { PropTypes } from 'react';
import RSSFeed from './RSSFeed.jsx';

const RSSFeedList = ({ rssFeed }) => (
  <div className="RSSFeedList">
    {
      rssFeed.map(feed =>
        <RSSFeed key={feed.key} rssFeed={feed} />)
    }
  </div>
);

RSSFeedList.propTypes = {
  rssFeed: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RSSFeedList;

    // <RSSFeed rssFeed={rssFeed[0]} />
    // <RSSFeed rssFeed={rssFeed[1]} />

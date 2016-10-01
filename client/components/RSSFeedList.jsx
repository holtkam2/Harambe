import React, { PropTypes } from 'react';
// import RSSFeed from './RSSFeed.jsx';

const RSSFeedList = ({ rssFeed }) => (
  <div className="RSSFeedList">
    <div className="rssF1">
      {
        rssFeed.map(feed => feed.text).join('  ')
      }
    </div>
  </div>
);

RSSFeedList.propTypes = {
  rssFeed: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RSSFeedList;

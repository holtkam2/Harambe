import React, { PropTypes } from 'react';

const RSSFeed = ({ rssFeed }) => (
  <div>
    {rssFeed}
  </div>
);

RSSFeed.propTypes = {
  rssFeed: PropTypes.string.isRequired,
};

export default RSSFeed;

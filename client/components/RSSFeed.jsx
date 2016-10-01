import React, { PropTypes } from 'react';

const RSSFeed = ({ rssFeed }) => (
  <div>
    {rssFeed}
  </div>
);

RSSFeed.propTypes = {
  rssFeed: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RSSFeed;

import React, { PropTypes } from 'react';

const RSSFeed = props => (
  <li className="rssF1">
    {props.rssFeed.text}
  </li>
);

RSSFeed.propTypes = {
  rssFeed: PropTypes.shape({
    text: PropTypes.string,
  }).isRequired,
};

export default RSSFeed;

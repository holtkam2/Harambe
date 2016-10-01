import React, { PropTypes } from 'react';

const RSSFeed = props => (
  <li>
    {props.rssFeed.text}
  </li>
);

RSSFeed.propTypes = {
  rssFeed: PropTypes.shape({
    text: PropTypes.string,
  }).isRequired,
};

export default RSSFeed;

import React, { PropTypes } from 'react';

const RSSTicker = ({ rssFeed }) => <h2>{ rssFeed }</h2>;

RSSTicker.propTypes = {
  rssFeed: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default RSSTicker;

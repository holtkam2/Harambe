import React, { PropTypes } from 'react';

const SentiBar = ({ SentiBarState }) => (
  <div>
    {SentiBarState.anger}
  </div>
);

SentiBar.propTypes = {
  SentiBarState: PropTypes.objectOf(PropTypes.array),
};

export default SentiBar;

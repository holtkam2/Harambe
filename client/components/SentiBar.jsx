import React, { PropTypes } from 'react';

const SentiBar = ({ SentiBarState }) => (
  // SentiBarState has the object with anger fear bla bla bla
  <div>
    {SentiBarState.anger}
  </div>
);

SentiBar.propTypes = {
  SentiBarState: PropTypes.objectOf(PropTypes.array),
};

export default SentiBar;

import React, { PropTypes } from 'react';

const SentiBar = ({ SentiBarState }) => (
  // SentiBarState has the object with anger fear bla bla bla
  <div className="Sentiment">
    <div className="emoAnger" style={{ width: `${SentiBarState.anger * 100}%` }} />

    <div className="emoDisgust" style={{ width: `${SentiBarState.disgust * 100}%` }} />

    <div className="emoFear" style={{ width: `${SentiBarState.fear * 100}%` }} />

    <div className="emoJoy" style={{ width: `${SentiBarState.joy * 100}%` }} />

    <div className="emoSadness" style={{ width: `${SentiBarState.sadness * 100}%` }} />
  </div>
);

SentiBar.propTypes = {
  SentiBarState: PropTypes.objectOf(PropTypes.number),
};

export default SentiBar;

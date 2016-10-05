import React, { Component, PropTypes } from 'react';
import LinkButton from './LinkButton.jsx';

class ButtonList extends Component {
  // Constructor not currently needed

  componentDidMount() {
    this.props.updateStateFromServer();
  }

  render() {
    const { buttons } = this.props.buttonListState;
    const buttonNames = Object.keys(buttons);

    return (
      <div className="NavButtonContainer">
        {buttonNames.map(name => (
          <div key={name} className="NavButton"><LinkButton name={name} urls={buttons[name]} /></div>
        ))}
      </div>
    );
  }
}

ButtonList.propTypes = {
  buttonListState: PropTypes.shape({
    buttons: React.PropTypes.obj,
  }),
  updateStateFromServer: PropTypes.func,
};

export default ButtonList;

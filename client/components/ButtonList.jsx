import React, { Component } from 'react';
import LinkButton from './LinkButton.jsx';

class ButtonList extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.updateStateFromServer();
  }

  render() {
    const buttons = this.props.buttonListState.buttons;
    const { updateStateFromServer } = this.props;
    const buttonNames = [];

    for (const i in buttons) {
      if (i !== 'undefined') {
        buttonNames.push(i);
      }
    }

    return (
      <div className="NavButtonContainer">
        {
          buttonNames.map((name) => {
            return <div className="NavButton"><LinkButton name={name} urls={buttons[name]} /></div>;
          })
        }
      </div>
    );
  }
}

export default ButtonList;

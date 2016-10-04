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
      <div>
        {
          buttonNames.map((name) => {
            return <LinkButton name={name} urls={buttons[name]} />;
          })
        }
      </div>
    );
  }
}

export default ButtonList;

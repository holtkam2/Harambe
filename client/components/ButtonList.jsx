import React, { Component } from 'react';
import LinkButton from './LinkButton.jsx';

class ButtonList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const buttons = this.props.buttonListState.buttons;
    console.log(buttons)
    var buttonNames = [];

    for (var i in buttons){
      if (i !== "undefined"){
        buttonNames.push(i)
      }
    }

    return (
      <div>
        {
          buttonNames.map(name => {
            return <LinkButton name = {name} urls = {buttons[name]} />
          })
        }
      </div>
    )

  }
}

export default ButtonList;

// <div>
//  <LinkButton name = {buttonNames[0]} urls = {buttons[ButtonNames[0]]} />
// </div>

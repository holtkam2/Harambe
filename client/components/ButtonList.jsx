import React, { Component } from 'react';
import LinkButton from './LinkButton.jsx';

class ButtonList extends Component {

  constructor(props) {
    super(props);
    this.state = props.buttonListState.buttons;
    // this gets an object back with key: btn name value [] of links
  }

  render() {
    let name = '';
    let links = [];
    for( let key in this.state){
      name = key;
      links = this.state[key];
    return (
      <LinkButton name={name} urls={links} />
    );
  }
  }
}

// const ButtonList = ( { buttonListState }) => (
//   <div className="buttonList">
//     <LinkButton name={'Seach Engines'} urls={['https://www.google.com', 'https://www.yahoo.com', 'https://www.bing.com']} />
//     <LinkButton name={'Forums'} urls={['https://www.reddit.com', 'https://news.ycombinator.com']} />
//     <LinkButton name={'News'} urls={['https://news.google.com', 'http://www.foxnews.com']} />
//   </div>
// );

export default ButtonList;

/* eslint-env browser*/
import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class LinkButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      primed: false,
    };

    this.onClick = this.onClick.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  onClick() {
    this.setState({ primed: true });
  }

  onMouseMove() {
    if (this.state.primed) {
      setTimeout(url => window.open(url, '_blank'), 350, this.props.urls[this.state.index]);

      this.setState({ index: this.state.index + 1 });

      if (this.state.index === this.props.urls.length - 1) {
        this.setState({
          index: 0,
          primed: false,
        });
      }
    }
  }

  render() {
    return (
      <RaisedButton
        primary
        onClick={this.onClick}
        onMouseMove={this.onMouseMove}
      >{this.props.name}
      </RaisedButton>
    );
  }
}

LinkButton.propTypes = {
  name: PropTypes.string.isRequired,
  urls: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default LinkButton;

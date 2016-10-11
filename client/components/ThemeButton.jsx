import React, { Component } from 'react';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Toggle from 'material-ui/Toggle';
import Snackbar from 'material-ui/Snackbar';

const styles = {
  toggle: {
    marginBottom: 7,
  },
};

// eslint-disable-next-line react/prefer-stateless-function
class ThemeButton extends Component {
  constructor(props) {
    super(props);
    this.state = { toggled: false };
  }

  handleToggle = () => {
    if (this.state.toggled === false) {
      this.setState({ toggled: true });
    } else {
      this.setState({ toggled: false });
    }
  }
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div>
        <div className="UISlider">
          <Toggle
            style={styles.toggle}
            onToggle={this.handleToggle}
          />
        </div>
        <div>
          <Snackbar
            open={this.state.toggled}
            message="toggle between light and dark themes is a VIP feature"
            autoHideDuration={1500}
            onRequestClose={this.handleToggle}
          />
        </div>
      </div>
    );
  }
}

export default ThemeButton;

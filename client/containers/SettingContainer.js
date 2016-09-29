import React from 'react';
import { connect } from 'react-redux';
import { toggleSettings } from '../actions';
import SettingsButton from '../components/Button';

const mapDispatchToProps = ({
  toggleSettings: toggleSettings
})

// const SettingsContainer = connect(
//   mapDispatchToProps
// )(SettingsButton)

// export default SettingsContainer;

export default connect(null, mapDispatchToProps)(SettingsButton);
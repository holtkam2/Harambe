import { connect } from 'react-redux';
import SettingsButton from '../components/SettingsButton.jsx';

const mapDispatchToProps = dispatch =>
  ({
    toggleSubmit: () => {
      dispatch({ type: 'TOGGLE_SETTINGS' });
    },
  });

export default connect(mapDispatchToProps)(SettingsButton);

import { connect } from 'react-redux';
import SettingsButton from '../components/SettingsButton.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSubmit: () => {
      dispatch(type: 'TOGGLE_SETTINGS');
    }
  }
}

export default connect(mapDispatchToProps)(SettingsButton)

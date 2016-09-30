import { connect } from 'react-redux';
import { toggleSettings, addButtonClick } from '../actions';
import SettingsButton from '../components/Button';

const mapDispatchToProps = ({
  toggleSettings,
  addButtonClick,
});

// const SettingsContainer = connect(
//   mapDispatchToProps
// )(SettingsButton)

// export default SettingsContainer;

export default connect(null, mapDispatchToProps)(SettingsButton);

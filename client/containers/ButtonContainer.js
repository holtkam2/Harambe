import { connect } from 'react-redux';
import SettingsButton from '../components/Button';
import { getStateFromServer } from '../actions';

// need a mapdispatchtoprops function here...


export default connect(null, mapDispatchToProps)(SettingsButton);

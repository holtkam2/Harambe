import { connect } from 'react-redux';

import Settings from '../components/Settings';

const mapStateToProps = state =>
  ({
    showSettings: state[0].displaySettings,
  });

export default connect(mapStateToProps)(Settings);


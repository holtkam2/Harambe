import { connect } from 'react-redux';
import WelcomeBar from '../components/welcomeBar';

const mapStateToProps = state => ({
  welcomeBarState: state.currentUser,
});

export default connect(mapStateToProps)(WelcomeBar);

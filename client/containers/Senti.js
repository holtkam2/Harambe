import { connect } from 'react-redux';
import SentiBar from '../components/SentiBar';

const mapStateToProps = state => ({
  SentiBarState: state.sentiState,
});

export default connect(mapStateToProps)(SentiBar);

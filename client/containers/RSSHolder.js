import { connect } from 'react-redux';
import RSSTicker from '../components/RSSTicker';

const mapStateToProps = state => ({
  rssFeed: state.rssFeed,
});

export default connect(mapStateToProps)(RSSTicker);

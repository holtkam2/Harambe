import { connect } from 'react-redux';
import RSSFeedList from '../components/RSSFeedList';

const mapStateToProps = state => ({
  rssFeed: state.rssFeed,
});

export default connect(mapStateToProps)(RSSFeedList);

import { connect } from 'react-redux';
import RSSFeedList from '../components/RSSFeedList';

const mapStateToProps = state => ({
  rssFeed: state.rssFeed,
  chosenRssFeed1: state.RSSFeedList[0],
  chosenRssFeed2: state.RSSFeedList[1],
});

export default connect(mapStateToProps)(RSSFeedList);

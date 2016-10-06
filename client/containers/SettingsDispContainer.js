import { connect } from 'react-redux';
import SettingDisp from '../components/SettingDisp';
import { addButton, addURL, addInterest, addRSSFeedToInterest, deleteButton } from '../actions/index';

const mapStateToProps = state => ({
  active: state.toggle,
  state,
});

const mapDispatchToProps = dispatch => ({

  addButtonClick: (buttonName) => {
    dispatch(addButton(buttonName));
  },

  addURLClick: (URLName, buttonName) => {
    dispatch(addURL(URLName, buttonName));
  },

  interestNameClick: (interestName) => {
    dispatch(addInterest(interestName));
  },

  RSSFeedURLClick: (RSSFeedURL, interestName) => {
    dispatch(addRSSFeedToInterest(RSSFeedURL, interestName));
  },

  deleteButtonClick: (buttonToDelete) => {
    dispatch(deleteButton(buttonToDelete));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(SettingDisp);

import { connect } from 'react-redux';
import SettingsDisp from '../components/SettingsDisp.jsx';
import { addButton, addURL, deleteButton } from '../actions/index';

const mapDispatchToProps = dispatch => ({

  addButtonClick: (buttonName) => {
    dispatch(addButton(buttonName));
  },

  addURLClick: (URLName, buttonName) => {
    dispatch(addURL(URLName, buttonName));
  },

  deleteButtonClick: (buttonToDelete) => {
    dispatch(deleteButton(buttonToDelete));
  },

  selectRSSfeed: (selection) => {
    console.log(selection)
  },

});

const mapStateToProps = state => ({
  active: state.toggle,
  state,
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsDisp);

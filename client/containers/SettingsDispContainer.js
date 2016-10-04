import { connect } from 'react-redux';
import SettingDisp from '../components/SettingDisp';
import { addButton, addURL } from '../actions/index';

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

});

export default connect(mapStateToProps, mapDispatchToProps)(SettingDisp);

import { connect } from 'react-redux';
import SettingDisp from '../components/SettingDisp';
import { addButton } from '../actions/index';

const mapStateToProps = state => ({
  active: state.toggle,
});

const mapDispatchToProps = dispatch => ({

  addButtonClick: (buttonName) => {
    dispatch(addButton(buttonName));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(SettingDisp);

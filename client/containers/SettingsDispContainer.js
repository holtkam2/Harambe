import { connect } from 'react-redux';
import SettingDisp from '../components/SettingDisp';
import { addButton } from '../actions/index';

// this is not passing off the state to SettingDisp
const mapStateToProps = state => ({
  active: state.toggle,
});

const mapDispatchToProps = dispatch => ({
  addButtonClick: (formInput) => {
    console.log('DISPATCH', formInput);
    dispatch(addButton('HRRTEST'));
  },
});

// const SettingDispCont = connect(
//   mapStateToProps
// )(SettingDisp)

export default connect(mapStateToProps, mapDispatchToProps)(SettingDisp);

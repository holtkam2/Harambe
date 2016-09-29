import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import SettingDisp from '../components/SettingDisp';

// this is not passing off the state to SettingDisp
const mapStateToProps = (state, active) => ({
  active: state[0].displaySetting,
})

const SettingDispCont = connect(
  mapStateToProps
)(SettingDisp)

export default SettingDispCont;

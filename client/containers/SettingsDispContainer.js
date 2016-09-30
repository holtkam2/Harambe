import { connect } from 'react-redux';
import SettingDisp from '../components/SettingDisp';

// this is not passing off the state to SettingDisp
const mapStateToProps = state => ({
  active: state.toggle,
});

const mapDispatchToProps = state => ({
  addButtonClick: state.addButtonClick,
});

// const SettingDispCont = connect(
//   mapStateToProps
// )(SettingDisp)

export default connect(mapStateToProps, mapDispatchToProps)(SettingDisp);

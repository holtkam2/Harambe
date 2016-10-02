import { connect } from 'react-redux';
import ButtonList from '../components/ButtonList';

const mapStateToProps = state => ({
  buttonListState: state.addButtonClick,
});

export default connect(mapStateToProps)(ButtonList);

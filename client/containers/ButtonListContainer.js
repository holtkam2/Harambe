import { connect } from 'react-redux';
import ButtonList from '../components/ButtonList';
import { updateStateFromServer } from '../actions/index';

const mapStateToProps = state => ({
  buttonListState: state.addButtonClick,
});

const mapDispatchToProps = dispatch => ({

  updateStateFromServer: () => {
    dispatch(updateStateFromServer());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonList);

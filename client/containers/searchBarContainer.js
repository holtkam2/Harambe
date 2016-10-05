import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import { setInitialState } from '../actions/index';

const mapDispatchToProps = dispatch => ({

  sendState: (data) => {
    dispatch(setInitialState(data));
  },

});

export default connect(null, mapDispatchToProps)(SearchBar);

import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  return {
    showSettings: state[0].displaySettings
  }
}

export default connect(mapStateToProps)(Settings);


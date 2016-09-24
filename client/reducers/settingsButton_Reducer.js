import { connect } from 'react-redux'
const reducer = (state = {showSettings: false}, action) => {
  let showSettings = state.showSettings
  switch (action.type) {

    case 'toggleSettings':
      return {
        showSettings: !showSettings
      }

    default: return state;
  }
}

function mapDispatchToProps(dispatch) {

  bindActionCreators({showSettings}, dispatch)

}

export default connect(null, mapDispatchToProps) (getSettings)
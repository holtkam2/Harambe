import { connect } from 'react-redux'
import {toggleSettingsButton} from '../actions'
import SettingsButton from '../components/SettingsButton'

const getSettings = (settingsButtonClicked, filter) => {
  switch (filter) {

    case 'SHOW_SETTINGS':
      return settingsButtonClicked
  }

}

const mapStateToProps = (state) => {

  return {
    toggleSettigs: state.settingsButtonClicked
  }

}


export default connect(mapStateToProps) (getSettings)




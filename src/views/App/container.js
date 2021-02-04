import { connect } from 'react-redux'
// import { getUserNew } from '../../store/user/duck'

import AppComponent from './App'


const AppContainer = connect(
  // Map state to props
  state => ({
    // user: state.user.user
  }),
  {
    // getUserNew
  }
  // Map actions to dispatch and props
)
(AppComponent)
export default AppContainer

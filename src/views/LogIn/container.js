import { connect } from 'react-redux'

import { userClearPhase, loginUser } from '../../store/user/duck'

import Login from './component'

const LoginContainer = connect(
  // Map state to props
  state => ({
    loginPhase: state.user.loginPhase,
    loginData: state.user.user
  }),
  {
    userClearPhase,
    loginUser
  }
  // Map actions to dispatch and props
)(Login)

export default LoginContainer

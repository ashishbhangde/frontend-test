import { connect } from 'react-redux'

import { signupUser, userClearPhase } from '../../store/user/duck'

import SignUpComponent from './component'

const SignUpContainer = connect(
  // Map state to props
  state => ({
    signupPhase: state.user.signupPhase,
    signupuserdata: state.user.signupuserdata
  }),
  {
    signupUser,
    userClearPhase
  }
  // Map actions to dispatch and props
)
(SignUpComponent)
export default SignUpContainer

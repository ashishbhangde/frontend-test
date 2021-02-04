import { connect } from 'react-redux'

import { userClearPhase, registerStudent } from '../../store/user/duck'

import RegisterComponent from './component'

const RegisterContainer = connect(
  // Map state to props
  state => ({
    registerStudentPhase: state.user.registerStudentPhase,
    registerStudentData: state.user.registerStudentData
  }),
  {
    registerStudent,
    userClearPhase
  }
  // Map actions to dispatch and props
)
(RegisterComponent)
export default RegisterContainer

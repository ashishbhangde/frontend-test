import { connect } from 'react-redux'

import { userClearPhase, getStudentsList, registerStudent, deleteStudentById } from '../../store/user/duck'

import ViewStudentComponent from './component'
const ViewStudentContainer = connect(
  // Map state to props
  state => ({
    getStudentsPhase: state.user.getStudentsPhase,
    getStudentsData: state.user.getStudentsData,
    registerStudentPhase: state.user.registerStudentPhase,
    registerStudentData: state.user.registerStudentData,
    deleteStudentPhase: state.user.deleteStudentPhase,
    deleteStudentData: state.user.deleteStudentData
  }),
  {
    userClearPhase,
    getStudentsList,
    registerStudent,
    deleteStudentById
  }
  // Map actions to dispatch and props
)(ViewStudentComponent)

export default ViewStudentContainer

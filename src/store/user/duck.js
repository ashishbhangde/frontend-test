import { fromPromise } from 'rxjs/observable/fromPromise'
import { of } from 'rxjs'
import { mergeMap, flatMap, catchError } from 'rxjs/operators'
import { Record } from 'immutable'
import { ofType, combineEpics } from 'redux-observable'
import { assign } from 'lodash'

import { INIT, LOADING, SUCCESS, ERROR } from '../../constants/phase'

import * as api from './api'

/***********************************
 * Action Types
 ***********/
export const LOGIN_USER = 'student/user/LOGIN_USER'
export const LOGIN_USER_SUCCESS = 'student/user/LOGIN_USER_SUCCESS'
export const LOGIN_USER_ERROR = 'student/user/LOGIN_USER_ERROR'

export const SIGNUP_USER = 'student/user/SIGNUP_USER'
export const SIGNUP_USER_SUCCESS = 'student/user/SIGNUP_USER_SUCCESS'
export const SIGNUP_USER_ERROR = 'student/user/SIGNUP_USER_ERROR'

export const GET_DASHBOARD_DATA = 'student/user/GET_DASHBOARD_DATA'
export const GET_DASHBOARD_DATA_SUCCESS = 'student/user/GET_DASHBOARD_DATA_SUCCESS'
export const GET_DASHBOARD_DATA_ERROR = 'student/user/GET_DASHBOARD_DATA_ERROR'

export const REGISTER_STUDENT = 'student/user/REGISTER_STUDENT'
export const REGISTER_STUDENT_SUCCESS = 'student/user/REGISTER_STUDENT_SUCCESS'
export const REGISTER_STUDENT_ERROR = 'student/user/REGISTER_STUDENT_ERROR'

export const GET_STUDENTS = 'student/user/GET_STUDENTS'
export const GET_STUDENTS_SUCCESS = 'student/user/GET_STUDENTS_SUCCESS'
export const GET_STUDENTS_ERROR = 'student/user/GET_STUDENTS_ERROR'

export const DELETE_STUDENT = 'student/user/DELETE_STUDENT'
export const DELETE_STUDENT_SUCCESS = 'student/user/DELETE_STUDENT_SUCCESS'
export const DELETE_STUDENT_ERROR = 'student/user/DELETE_STUDENT_ERROR'

export const CLEAR_PHASE = 'student/user/CLEAR_PHASE'

export const USER_LOGOUT = 'student/user/USER_LOGOUT'
/***********************************
 * Initial State
 ***********/

const InitialStateInterface = {
  token: null,
  error: {},
  message: '',
  loginError: {},
  signupError: {},
  user: {},
  isSuccess: false,
  loginPhase: INIT,
  loginData: [],
  signupPhase: INIT,
  signupuserdata: [],
  registerStudentPhase: INIT,
  registerStudentData: [],
  getStudentsPhase: INIT,
  getStudentsData: [],
  deleteStudentPhase: INIT,
  deleteStudentData: []
}

class InitialState extends Record(InitialStateInterface) {
  constructor(desiredValues) {
    const token = localStorage.getItem('Authorization')
    super(assign({ token }, desiredValues))
  }
}

/***********************************
 * Reducer
 ***********/

export default function (state = new InitialState(), action = {}) {
  switch (action.type) {
    case LOGIN_USER: {
      return state.set('loginPhase', LOADING).set('loginError', null)
    }

    case LOGIN_USER_SUCCESS: {
      const { payload } = action
      console.log('>>>>.', payload)
      let token = ''
      if(payload && payload.success){
        localStorage.setItem('user', JSON.stringify(payload.data))
      }
      return state
        .set('loginPhase', SUCCESS)
        .set('user', payload)
        .set('isSuccess', payload.status)
        .set('message', payload.message)
        .set('loginError', null)
    }

    case LOGIN_USER_ERROR: {
      const { payload } = action
      return state.set('loginError', payload.error).set('loginPhase', ERROR)
    }

    case SIGNUP_USER: {
      return state.set('signupPhase', LOADING).set('signupError', null)
    }

    case SIGNUP_USER_SUCCESS: {
      const { payload } = action
      let token = ''
      if(payload && payload.success){
        localStorage.setItem('user', JSON.stringify(payload.data))
      }
      return state
        .set('signupPhase', SUCCESS)
        .set('signupuserdata', payload)
        .set('signupError', null)
        .set('isSuccess', payload.status)
        .set('message', payload.message)
    }

    case SIGNUP_USER_ERROR: {
      const { payload } = action
      return state
        .set('signupPhase', ERROR)
        .set('signupError', payload.error)
        .set('message', payload.message)
    }
    
    case GET_DASHBOARD_DATA: {
      return state
        .set('dashboardPhase', LOADING)
        .set('error', null)
    }

    case GET_DASHBOARD_DATA_SUCCESS: {
      const { payload } = action
      return state
        .set('dashboardPhase', SUCCESS)
        .set('dashboardData', payload)
        .set('isSuccess', payload.status)
        .set('message', payload.message)
    }

    case GET_DASHBOARD_DATA_ERROR: {
      return state
        .set('dashboardPhase', ERROR)
        .set('error', null)
    }
    
    case REGISTER_STUDENT: {
      return state
        .set('registerStudentPhase', LOADING)
        .set('error', null)
    }

    case REGISTER_STUDENT_SUCCESS: {
      const { payload } = action
      return state
        .set('registerStudentPhase', SUCCESS)
        .set('registerStudentData', payload)
        .set('isSuccess', payload.status)
        .set('message', payload.message)
    }

    case REGISTER_STUDENT_ERROR: {
      return state
        .set('registerStudentPhase', ERROR)
        .set('error', null)
    }
    
    case GET_STUDENTS: {
      return state
        .set('getStudentsPhase', LOADING)
        .set('error', null)
    }

    case GET_STUDENTS_SUCCESS: {
      const { payload } = action
      return state
        .set('getStudentsPhase', SUCCESS)
        .set('getStudentsData', payload)
        .set('isSuccess', payload.status)
        .set('message', payload.message)
    }

    case GET_STUDENTS_ERROR: {
      return state
        .set('getStudentsPhase', ERROR)
        .set('error', null)
    }
    
    case DELETE_STUDENT: {
      return state
        .set('deleteStudentPhase', LOADING)
        .set('error', null)
    }

    case DELETE_STUDENT_SUCCESS: {
      const { payload } = action
      return state
        .set('deleteStudentPhase', SUCCESS)
        .set('deleteStudentData', payload)
        .set('isSuccess', payload.status)
        .set('message', payload.message)
    }

    case DELETE_STUDENT_ERROR: {
      return state
        .set('deleteStudentPhase', ERROR)
        .set('error', null)
    }

    case CLEAR_PHASE: {
      return state
        .set('message', '')
        .set('loginPhase', INIT)
        .set('signupPhase', INIT)
        .set('dashboardPhase', INIT)
        .set('registerStudentPhase', INIT)
        .set('getStudentsPhase', INIT)
        .set('deleteStudentPhase', INIT)
    }

    case USER_LOGOUT: {
      window.localStorage.clear()
      return state.set('user', {})
    }

    default: {
      return state
    }
  }
}

/***********************************
 * Action Creators
 ***********/

export const signupUser = data => {
  return {
    type: SIGNUP_USER,
    payload: data
  }
}

export const loginUser = credentials => {
  return {
    type: LOGIN_USER,
    payload: credentials
  }
}

export const getDashboardData = data => {
  return {
    type: GET_DASHBOARD_DATA,
    payload: data
  }
}

export const registerStudent = data => {
  return {
    type: REGISTER_STUDENT,
    payload: data
  }
}

export const getStudentsList = data => {
  return {
    type: GET_STUDENTS,
    payload: data
  }
}

export const deleteStudentById = data => {
  return {
    type: DELETE_STUDENT,
    payload: data
  }
}

export const userClearPhase = credentials => {
  return {
    type: CLEAR_PHASE,
    payload: credentials
  }
}

/***********************************
 * Epics
 ***********************************/

const loginUserEpic = action$ =>
  action$.pipe(
    ofType(LOGIN_USER),
    mergeMap(action => {
      return fromPromise(api.loginUser(action.payload)).pipe(
        flatMap(payload => [
          {
            type: LOGIN_USER_SUCCESS,
            payload
          }
        ]),
        catchError(error =>
          of({
            type: LOGIN_USER_ERROR,
            payload: { error }
          })
        )
      )
    })
  )

const signupUserEpic = action$ =>
  action$.pipe(
    ofType(SIGNUP_USER),
    mergeMap(action => {
      return fromPromise(api.signupUser(action.payload)).pipe(
        flatMap(payload => [
          {
            type: SIGNUP_USER_SUCCESS,
            payload
          }
        ]),
        catchError(error =>
          of({
            type: SIGNUP_USER_ERROR,
            payload: { error }
          })
        )
      )
    })
  )
  
  const registerStudentEpic = action$ =>
  action$.pipe(
    ofType(REGISTER_STUDENT),
    mergeMap(action => {
      return fromPromise(api.registerStudent(action.payload)).pipe(
        flatMap(payload => [
          {
            type: REGISTER_STUDENT_SUCCESS,
            payload
          }
        ]),
        catchError(error =>
          of({
            type: REGISTER_STUDENT_ERROR,
            payload: { error }
          })
        )
      )
    })
  )
  
  const getStudentsListEpic = action$ =>
  action$.pipe(
    ofType(GET_STUDENTS),
    mergeMap(action => {
      return fromPromise(api.getStudentsList(action.payload)).pipe(
        flatMap(payload => [
          {
            type: GET_STUDENTS_SUCCESS,
            payload
          }
        ]),
        catchError(error =>
          of({
            type: GET_STUDENTS_ERROR,
            payload: { error }
          })
        )
      )
    })
  )
  
  const getDashboardDataEpic = action$ =>
  action$.pipe(
    ofType(GET_DASHBOARD_DATA),
    mergeMap(action => {
      return fromPromise(api.getDashboardData(action.payload)).pipe(
        flatMap(payload => [
          {
            type: GET_DASHBOARD_DATA_SUCCESS,
            payload
          }
        ]),
        catchError(error =>
          of({
            type: GET_DASHBOARD_DATA_ERROR,
            payload: { error }
          })
        )
      )
    })
  )
  
  const deleteStudentByIdEpic = action$ =>
  action$.pipe(
    ofType(DELETE_STUDENT),
    mergeMap(action => {
      return fromPromise(api.deleteStudentById(action.payload)).pipe(
        flatMap(payload => [
          {
            type: DELETE_STUDENT_SUCCESS,
            payload
          }
        ]),
        catchError(error =>
          of({
            type: DELETE_STUDENT_ERROR,
            payload: { error }
          })
        )
      )
    })
  )

export const userEpic = combineEpics(
  loginUserEpic,
  signupUserEpic,
  getDashboardDataEpic,
  registerStudentEpic,
  getStudentsListEpic,
  deleteStudentByIdEpic
)

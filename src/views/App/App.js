import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import StudentRegistration from '../StudentRegistration/container'
import LogIn from '../LogIn/container'
import SignUp from '../SignUp/container'
import Dashboard from '../Dashboard/container'
import ViewStudent from '../ViewStudent/container'
import './App.scss'

// eslint-disable-next-line no-unused-vars
const PrivateRoute = ({ component, ...rest }) => {
  // const userData = JSON.parse(localStorage.getItem('user'))
  const user = window.localStorage.getItem('authToken')
  const isAuthed = user ? true : false
  return (
    <Route
      {...rest}
      exact
      render={(props) =>
        isAuthed ? (
          <div>{React.createElement(component, props)}</div>
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}
export default class App extends Component {
  componentDidMount() {
    const user = window.localStorage.getItem('authToken')
    const isAuthed = user ? true : false
    if (!isAuthed) {
      return (
        <Redirect
          to={{
            pathname: '/login',
          }}
        />
      )
    }
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route exact path={'/student-registration'} component={StudentRegistration} {...this.props} />
          <Route exact path={'/view-students'} component={ViewStudent} {...this.props} />
          <Route exact path={'/dashboard'} component={Dashboard} {...this.props} />
          <Route path={'/login'} component={LogIn} {...this.props} render={() => <Redirect to="/login" />}
          />
          <Route path={'/signup'} component={SignUp} {...this.props} />
        </Switch>
      </Router>
    )
  }
}

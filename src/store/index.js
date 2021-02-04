import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { createEpicMiddleware, combineEpics } from 'redux-observable'

import app from './app'
import user, { userEpic } from './user/duck'

// Bundling Epics
const rootEpic = combineEpics(userEpic)

// Creating Bundled Epic
// const epicMiddleware = createEpicMiddleware(rootEpic);
const epicMiddleware = createEpicMiddleware()

// Define Middleware
const middleware = [thunk, promise, epicMiddleware]

// Define Reducers
const reducers = combineReducers({
  app,
  user,
  form: formReducer
})

// Create Store
export default createStore(
  reducers,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // {},
  applyMiddleware(...middleware)
)
epicMiddleware.run(rootEpic)

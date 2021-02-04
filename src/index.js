import React from 'react';
import './theme/global.scss';
import './theme/variable.scss';
// import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App/App';
import App from './views/App/container.js'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './store'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

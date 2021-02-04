import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./styles.scss";
import _ from 'lodash'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
      email: '',
      err: {},
      errorMsg: '',
      sumbitKey: false
    }
  }

  componentDidMount() {
    const user = localStorage.getItem('user')
    if (!_.isEmpty(user) && user !== 'undefined' && user !== undefined && user !== null && user !== 'null') {
      this.props.history.push('/dashboard')
    }
  }


  componentDidUpdate(prevProps, prevState) {
    console.log(this.props.loginData && this.props.loginData.success)
      if(this.props.loginData && this.props.loginData.success){
        this.props.userClearPhase()
        this.props.history.push('/dashboard')
      }
  }

  onChange(e){
    this.setState({ [e.target.name]: e.target.value,  errorMsg: '' })
  }

  onKeyDownHandler = e => {
    if (e.keyCode === 13) {
      if(this.state.chat_text!==''){
        this.singInSubmit(this)
      }
    }
  }

  singInSubmit(e){
    let err = {}
    const { password, email } = this.state
    if(password === '' || password.trim() === ''){
      err.password = 'Enter password'
      this.setState({ errorMsg: '' })
    }
    if (!email) {
      err.email = 'Enter email address';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(email)) {
      err.email = 'Invalid email address'
      this.setState({ errorMsg: '' })
    }
    this.setState({ err })
    if (!Object.keys(err).length) {
      this.props.loginUser({ email: email, password: password })
    }
  }

  render() {
    const { password, email } = this.state
    return (
      <>
        <div>      
       		<div>       		 
       			<div className="login__container">
              <div className="main__container cf">
                <div className="form__section animation-element bounce-up cf">
                  <div className="form__inner subject development">
                    <h2 className="title">Sign In</h2>
                    <h3 className="sub__title">New Here? 
                      <Link to={'/signup'} className="text-primary ml-2">Create Account</Link>
                    </h3> 
                      <div className="form-group material-textfield">                        
                        <input 
                          type="text"
                          name="email"
                          onKeyDown={this.onKeyDownHandler.bind(this)}
                          value={email} 
                          onChange={this.onChange.bind(this)} 
                          className="form-control material-textfield-input" 
                          id="exampleInputEmail1" 
                          aria-describedby="emailHelp"                       
                          required/>
                          <label htmlFor="exampleInputEmail1" className="material-textfield-label">Your Email</label>
                          {this.state.err.email ?
                          <span className="invalid-feedback">
                            {this.state.err.email}
                          </span> : ''}
                      </div>
                      <div className="form-group material-textfield">
                        <input 
                          type="password"
                          name="password"
                          onKeyDown={this.onKeyDownHandler.bind(this)}
                          value={password} 
                          onChange={this.onChange.bind(this)} 
                          className="form-control material-textfield-input" 
                          id="exampleInputName" 
                          aria-describedby="name" 
                          required/>
                          <label for="exampleInputName" className="material-textfield-label">Your Password</label>
                          {this.state.err.password ?
                          <span className="invalid-feedback">
                            {this.state.err.password}
                          </span> : ''}
                      </div>    
                      {
                        this.state.errorMsg !== '' &&
                        <div>
                          <h5>{this.state.errorMsg}</h5>
                        </div>
                      }           
                      <div>
                        <button onClick={this.singInSubmit.bind(this)}>Sign In</button>
                      </div>
                  </div>
                </div>
              </div> 
            </div>
       		</div>
        </div>
      </>
    )
  }
}

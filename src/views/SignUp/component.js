import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./styles.scss";
export default class component extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      err: {},
      errorMsg: '',
      submitType: false
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.signupPhase === 'success'){
      this.props.userClearPhase()
      this.props.history.push('/dashboard')
    }
  }

  onChange(e){
    this.setState({ [e.target.name]: e.target.value,  errorMsg: '' })
  }

  signUpSubmission(e){
    let err = {}
    const { name, email, password } = this.state
    if (name === '' || name.trim() === "") {
      alert('Please enter your name')
      err.name = "Please enter your name";
    }else if (!email) {
      err.email = 'Please enter email address';
      alert('Please enter email address')
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(email)) {
      err.email = 'Invalid email address'
      alert('Invalid email address')
    }else if(password === '' || password.trim() === ''){
      err.password = 'Please enter password'
      alert('Please enter password')
    }else if (password.length < 6) {
      err.password = "Enter at least 6 digit";
      alert('Enter at least 6 digit')
    }
    this.setState({ err })
    if (!Object.keys(err).length) {
      this.props.signupUser({ name: name, email: email, password: password })
      this.setState({ submitType: true })
    }
  }

  render() {
    const { name, email, password } = this.state
    return (
      <>
        <div>     
       		<div>    
            <div className="login__container">
              <div className="main__container">
                <div className="form__section animation-element bounce-up cf">
                  <div className="form__inner subject development">
                    <h2 className="title">Create Account</h2>
                    <h3 className="sub__title text-muted">Already have an Account ?
                      <Link to={'/login'} className="text-primary ml-2">Sign In</Link>
                    </h3>
                      <div className="form-group material-textfield">
                        <input 
                          type="text" 
                          name="name" 
                          value={name} 
                          onChange={this.onChange.bind(this)} 
                          className="form-control material-textfield-input"
                          aria-describedby="emailHelp"                           
                          required/>
                        <label htmlFor="exampleInputEmail1" className="material-textfield-label">Enter Name</label>
                        {this.state.err.name && (
                          <span className="invalid-feedback">
                            {this.state.err.name}
                          </span>
                        )}
                      </div>
                      <div className="form-group material-textfield">                        
                        <input 
                        type="text" 
                        name="email" 
                        value={email} 
                        onChange={this.onChange.bind(this)} 
                        className="form-control material-textfield-input" 
                        aria-describedby="name"                         
                        required/>
                        <label htmlFor="exampleInputName" className="material-textfield-label">Email Address</label>
                        {this.state.err.email && (
                          <span className="invalid-feedback">
                            {this.state.err.email}
                          </span>
                        )}
                      </div>    
                      <div className="form-group material-textfield">                                             
                        <input 
                        type="password" 
                        name="password" 
                        value={password} 
                        onChange={this.onChange.bind(this)} 
                        className="form-control material-textfield-input" 
                        aria-describedby="name"                        
                        required/>
                        <label htmlFor="exampleInputName" className="material-textfield-label">Enter Password</label>
                        {this.state.err.password && (
                          <span className="invalid-feedback">
                            {this.state.err.password}
                          </span>
                        )}
                      </div>    

                      {
                        this.state.errorMsg !== '' &&
                        <div>
                          <h5>{this.state.errorMsg}</h5>
                        </div>
                      }    

                      <div>
                        <button type="submit" onClick={this.signUpSubmission.bind(this)}>Sign up</button>
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

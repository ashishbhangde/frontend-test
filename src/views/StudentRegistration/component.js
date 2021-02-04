import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DatePicker } from 'antd';
import CountrySelect from "react-country-select";
import _ from 'lodash'
import Header from '../../components/Header/component'

import "./styles.scss";
export default class component extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      fatherName: '',
      email: '',
      address: '',
      mobileNo: '',
      gender: 'male',
      dob: '',
      country: '',
      err: {},
      errorMsg: '',
      submitType: false,
      imaegArr: []
    }
  }

  componentDidMount(){
    const user = localStorage.getItem('user')
    if (!_.isEmpty(user) && user !== 'undefined' && user !== undefined && user !== null && user !== 'null') {
      
    }else{
      this.props.history.push('/login')
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.registerStudentPhase === "success"){
      this.props.userClearPhase()
      alert("Student Added Successfully...")
      this.setState({ images: [], firstName: '', lastName: '', fatherName: '', email: '', address: '', mobileNo: '', gender: 'male', dob: '', country: '' })
    }
    if(this.props.registerStudentPhase === "error"){
      this.props.userClearPhase()
      alert("Something Went Wrong...")
    }
  }

  onChange(e){
    this.setState({ [e.target.name]: e.target.value,  errorMsg: '' })
  }

  onDateChange(date, dateString) {
    this.setState({ dob: dateString })
  }

  onSelect(val) {
    this.setState({ country: val.label })
  }

  handleImageFile(e){
    let imaegArr = []
    for (let i = 0; i < e.target.files.length; i += 1) {
      const val = (e.target.files)[i]
      imaegArr.push(val.name)
    }
    this.setState({ imaegArr })
  }

  signUpSubmission(e){
    const { firstName, lastName, fatherName, email, address, mobileNo, gender, dob, country} = this.state
    let err = {}
    if (firstName === '' || firstName.trim() === "") {
      alert('Please enter your first name')
    }else if(lastName === '' || lastName.trim() === ""){
      alert('Please enter your last name')
    } else if (!email) {
      err.email = 'Please enter email address';
      alert('Please enter email address')
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(email)) {
      err.email = 'Invalid email address'
      alert('Invalid email address')
    }
    this.setState({ err })
    if (!Object.keys(err).length) {
      const data = {
        images: this.state.imaegArr,
        firstName: firstName,
        lastName: lastName, 
        fatherName: fatherName,
        email: email,
        address: address,
        mobileNo: mobileNo,
        gender: gender,
        dob: dob,
        country: country,
        id: ''
      }
      this.props.registerStudent(data)
    }
  }

  render() {
    const { firstName, email } = this.state
    return (
      <>
        <Header {...this.props}/>
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
                          type="file"
                          id="imageFile"
                          multiple
                          accept="image/*"
                          onChange={this.handleImageFile.bind(this)}
                        />
                      </div>
                      <div className="form-group material-textfield">
                        <input 
                          type="text" 
                          name="firstName" 
                          value={firstName} 
                          onChange={this.onChange.bind(this)} 
                          className="form-control material-textfield-input"
                          aria-describedby="emailHelp"                           
                          required/>
                        <label for="exampleInputEmail1" className="material-textfield-label">Enter first Name</label>
                        {this.state.err.firstName && (
                          <span className="invalid-feedback">
                            {this.state.err.firstName}
                          </span>
                        )}
                      </div>
                      
                      <div className="form-group material-textfield">
                        <input 
                          type="text" 
                          name="lastName" 
                          value={this.state.lastName} 
                          onChange={this.onChange.bind(this)} 
                          className="form-control material-textfield-input"
                          aria-describedby="emailHelp"                           
                          required/>
                        <label for="exampleInputEmail1" className="material-textfield-label">Enter Last Name</label>
                        {this.state.err.lastName && (
                          <span className="invalid-feedback">
                            {this.state.err.lastName}
                          </span>
                        )}
                      </div>

                      <div className="form-group material-textfield">
                        <input 
                          type="text" 
                          name="fatherName" 
                          value={this.state.fatherName} 
                          onChange={this.onChange.bind(this)} 
                          className="form-control material-textfield-input"
                          aria-describedby="emailHelp"                           
                          required/>
                        <label for="exampleInputEmail1" className="material-textfield-label">Enter Father Name</label>
                        {this.state.err.fatherName && (
                          <span className="invalid-feedback">
                            {this.state.err.fatherName}
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
                        <label for="exampleInputName" className="material-textfield-label">Email ID</label>
                        {this.state.err.email && (
                          <span className="invalid-feedback">
                            {this.state.err.email}
                          </span>
                        )}
                      </div>    

                      <div className="form-group material-textfield">
                        <textarea 
                          type="text" 
                          name="address" 
                          value={this.state.address} 
                          onChange={this.onChange.bind(this)} 
                          className="form-control material-textfield-input"
                          aria-describedby="emailHelp"                           
                          required/>
                        <label for="exampleInputEmail1" className="material-textfield-label">Enter Address</label>
                        {this.state.err.address && (
                          <span className="invalid-feedback">
                            {this.state.err.address}
                          </span>
                        )}
                      </div>

                      <div className="form-group material-textfield">
                        <input 
                          type="number" 
                          name="mobileNo" 
                          value={this.state.mobileNo} 
                          onChange={this.onChange.bind(this)} 
                          className="form-control material-textfield-input"
                          aria-describedby="emailHelp"                           
                          required/>
                        <label for="exampleInputEmail1" className="material-textfield-label">Enter Mobile Number</label>
                        {this.state.err.mobileNo && (
                          <span className="invalid-feedback">
                            {this.state.err.mobileNo}
                          </span>
                        )}
                      </div>

                      <div className="form-group material-textfield">
                        <input type="radio" id="male" name="gender" value="male"/>
                        <label for="male">Male</label>
                        <input type="radio" id="female" name="gender" value="female"/>
                        <label for="female">Female</label>
                        <input type="radio" id="other" name="gender" value="other"/>
                        <label for="other">Other</label>
                      </div>
                     
                      <div className="form-group material-textfield">
                        <DatePicker onChange={this.onDateChange.bind(this)} />
                      </div>
                      
                      <div className="form-group material-textfield">
                        <CountrySelect multi={false} onSelect={this.onSelect.bind(this)}/>
                      </div>
                      {
                        this.state.errorMsg !== '' &&
                        <div>
                          <h5>{this.state.errorMsg}</h5>
                        </div>
                      }    

                      <div>
                        <button onClick={this.signUpSubmission.bind(this)}>Sign up</button>
                        <button onClick={()=> this.props.history.push('/dashboard')}>Go to Dashboard</button>
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

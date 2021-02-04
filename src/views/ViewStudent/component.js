import React, { Component } from 'react'
import "./styles.scss";
import { Table, Modal, Space, DatePicker, Spin } from 'antd';
import _ from 'lodash'
import moment from 'moment'
import CountrySelect from "react-country-select";
import Header from '../../components/Header/component'
  
export default class ViewStudent extends Component {
  constructor(props) {
    super(props)
    this.state = {
        isLoading: true,
        firstName: '',
        lastName: '',
        fatherName: '',
        email: '',
        address: '',
        mobileNo: '',
        gender: 'male',
        dob: '',
        country: '',
        getAllStudentData: [],
        studentId: '',
        isModalVisible: false,
        err: {},
        isDelete: false
    }
  }

  componentDidMount(){
    const user = localStorage.getItem('user')
    if (!_.isEmpty(user) && user !== 'undefined' && user !== undefined && user !== null && user !== 'null') {
      this.props.getStudentsList()
    }else{
      this.props.history.push('/login')
    }
  }

  componentDidUpdate(props, state){
    if(this.props.getStudentsPhase === 'success'){
        this.props.userClearPhase()
        let data = []
        const stdData = this.props.getStudentsData && this.props.getStudentsData.data
        if(_.size(stdData) > 0){
            stdData && stdData.map((std, i)=>{
              data.push({
                key: i,
                firstName: std.firstName,
                lastName: std.lastName,
                fatherName: std.fatherName,
                email: std.email,
                address: std.address,
                mobileNo: std.mobileNo,
                gender: std.gender,
                dob: std.dob,
                country: std.country,
                studentId: std._id
              })
            })
          }
        this.setState({ isLoading: false, getAllStudentData: data })
    }
    if(this.props.getStudentsPhase === 'success'){
        this.props.userClearPhase()
        const stdData = this.props.getStudentsData && this.props.getStudentsData.data
        this.setState({ isLoading: false })
    }
    if(this.props.registerStudentPhase === "success"){
      this.props.userClearPhase()
      this.props.getStudentsList()
    }
    if(this.props.registerStudentPhase === "error"){
      this.props.userClearPhase()
    }
    if(this.props.deleteStudentPhase === "success"){
      this.props.userClearPhase()
      this.props.getStudentsList()
    }
    if(this.props.deleteStudentPhase === "error"){
      this.props.userClearPhase()
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

 genderChange(e){
   this.setState({ gender: e.target.value })
}

  editStudentAction(stdData, e){
    this.setState({ 
        studentId: stdData.studentId,
        firstName: stdData.firstName,
        lastName: stdData.lastName,
        fatherName: stdData.fatherName,
        email: stdData.email,
        address: stdData.address,
        mobileNo: stdData.mobileNo,
        gender: stdData.gender,
        dob: stdData.dob,
        country: stdData.country,
        isModalVisible: true
    })
  }

  handleOk = () => {
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
       images: [],
       firstName: firstName,
       lastName: lastName, 
       fatherName: fatherName,
       email: email,
       address: address,
       mobileNo: mobileNo,
       gender: gender,
       dob: dob,
       country: country,
       id: this.state.studentId
     }
     this.props.registerStudent(data)
     this.setState({ isModalVisible: false, isLoading: true })
   }
  };

  handleCancel = () => {
   this.setState({ isModalVisible: false })
  };

  deleteStudent(id, e){
    this.setState({ studentId: id, isDelete: true })
  }

  deleteHandleOk=(e)=>{
    this.props.deleteStudentById({ id: this.state.studentId })
    this.setState({ isLoading: true, isDelete: false })
  }

  deleteHandleCancel=(e)=>{
    this.setState({ isDelete: false })
  }

  render() {
    const { getAllStudentData, isModalVisible, firstName, email } = this.state 
    return (
      <>
      <Header {...this.props}/>
        <div>  
        <Spin spinning={this.state.isLoading} tip="Loading...">  
          <button onClick={()=> this.props.history.push('/dashboard')}>Go To Dashboard</button>  
       		<div> 
               {
                   (_.size(getAllStudentData) > 0) ?
                   <Table 
                    columns={
                    [
                        {
                            title: 'First Name',
                            dataIndex: 'firstName',
                            key: '1',
                            fixed: 'left',
                            width: 150,
                            render: text => <a>{text}</a>,
                        },
                        {
                            title: 'Last Name',
                            dataIndex: 'lastName',
                            width: 150,
                            key: '2',
                        },
                        {
                            title: 'Father Name',
                            dataIndex: 'fatherName',
                            width: 150,
                            key: '3',
                        },
                        {
                            title: 'Email',
                            dataIndex: 'email',
                            width: 200,
                            key: '4',
                        },
                        {
                            title: 'Address',
                            dataIndex: 'address',
                            width: 300,
                            key: '5',
                        },
                        {
                            title: 'Mobile No',
                            dataIndex: 'mobileNo',
                            width: 250,
                            key: '6',
                        },
                        {
                            title: 'Gender',
                            dataIndex: 'gender',
                            width: 100,
                            key: '7',
                        },
                        {
                            title: 'DOB',
                            dataIndex: 'dob',
                            width: 200,
                            key: '8',
                        },
                        {
                            title: 'Country',
                            dataIndex: 'country',
                            width: 150,
                            key: '9',
                        },
                        {
                            title: 'Action',
                            key: 'action',
                            fixed: 'right',
                            render: (text, record) => (
                                <Space size="middle">
                                    <a onClick={this.editStudentAction.bind(this, text)}>Edit</a>
                                    <a onClick={this.deleteStudent.bind(this, text.studentId)}>Delete</a>
                                </Space>
                            ),
                        },
                    ]} 
                    dataSource={getAllStudentData} 
                />
                : 
                 "Data Not Available"
               }      		 
               
       		</div>

               <Modal 
                  title="Edit Student Detail" 
                  visible={isModalVisible} 
                  onOk={this.handleOk} 
                  onCancel={this.handleCancel}
               >
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
                      </div>

                      <div className="form-group material-textfield">
                        <input type="radio" onChange={this.genderChange.bind(this)} checked={this.state.gender === "male" ? true : false} id="male" name="gender" value="male"/>
                        <label for="male">Male</label>
                        <input type="radio" onChange={this.genderChange.bind(this)} checked={this.state.gender === "female" ? true : false} id="female" name="gender" value="female"/>
                        <label for="female">Female</label>
                        <input type="radio" onChange={this.genderChange.bind(this)} checked={this.state.gender === "other" ? true : false} id="other" name="gender" value="other"/>
                        <label for="other">Other</label>
                      </div>
                     
                      <div className="form-group material-textfield">
                        <DatePicker 
                           onChange={this.onDateChange.bind(this)} 
                           defaultValue={this.state.dob !== '' ? moment(this.state.dob, 'YYYY-MM-DD') : ""}
                        />
                      </div>
                      
                      <div className="form-group material-textfield">
                        <CountrySelect multi={false} value={this.state.country} onSelect={this.onSelect.bind(this)}/>
                      </div>
                </Modal>
              
                <Modal 
                  title="Basic Modal" 
                  visible={this.state.isDelete} 
                  onOk={this.deleteHandleOk} 
                  onCancel={this.deleteHandleCancel}>
                  <p>Are you want to delete this student?</p>
                </Modal>

          </Spin>
        </div>
      </>
    )
  }
}

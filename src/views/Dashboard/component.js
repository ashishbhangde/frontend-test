import React, { Component } from 'react'
import "./styles.scss";
import _ from 'lodash'
import Header from '../../components/Header/component'

export default class Dashboatd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  componentDidMount(){
    const user = localStorage.getItem('user')
    if (!_.isEmpty(user) && user !== 'undefined' && user !== undefined && user !== null && user !== 'null') {
      
    }else{
      this.props.history.push('/login')
    }
  }

  render() {
    return (
      <>
        <div>  
          <Header {...this.props}/>    
       		<div>       		 
       			<div className="login__container">
              <div className="main__container cf">
                <div className="form__section animation-element bounce-up cf">
                  <div className="form__inner subject development">
                    <div>
                        <button onClick={()=> this.props.history.push('/view-students')}>View Student</button>
                    </div>
                  </div>
                  <div className="form__inner subject development">
                    <div>
                        <button onClick={()=> this.props.history.push('/student-registration')}>Add Student</button>
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

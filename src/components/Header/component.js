import React, { PureComponent } from "react";
import "./styles.scss";
import { withRouter } from "react-router-dom";

class Header extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  } 

  userLogout(e){
    localStorage.removeItem("user")
    localStorage.clear()
    this.props.history.push("/login")
    window.location.reload('/login')
  }
  
  render() {
    return (
      <>
        <header className="header">
           <button onClick={this.userLogout.bind(this)}>Logout</button>
        </header>
      </>
    );
  }
}

export default withRouter(Header)

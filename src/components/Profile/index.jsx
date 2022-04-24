import React from "react";
import Avatar from "../Avatar";
import Links from "../Links";
import "./profile.css"

class Profile extends React.Component{
  
  render(){
    return(
      <div className="profile">
        <Links simpleLink={true}>
          <Avatar src={this.props.user.image} alt={this.props.user.name} />
        </Links>      
        <div>{this.props.user.name}</div>
        <div>{this.props.user.age} years</div>
        <div>{this.props.user.adress}</div>
        <div>{this.props.user.mail}</div>
      </div>
    )
  }
}

export default Profile;
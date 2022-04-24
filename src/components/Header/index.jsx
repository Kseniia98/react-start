import React from "react";
import Nav from "../Nav";

class Header extends React.Component{
  render(){
    return(
      <header className="logo">
        <h1> {this.props.logoText}</h1>
        <Nav />
      </header>
    )
  }
}


export default Header;
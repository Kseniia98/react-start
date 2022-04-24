import React from "react";
import Links from "../Links";
import "./nav.css"

class Nav extends React.Component{
  render(){
    return(
      <nav>
        <ul className="navigation">
          <Links href='src/pages/Home.jsx'>Home</Links>
          <Links href='src/pages/About.jsx'>About</Links>
          <Links href='#'>Contacts</Links>
        </ul>
      </nav>
    );  
  }
}


export default Nav;
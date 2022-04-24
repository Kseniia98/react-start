import React from "react";

class Links extends React.Component{
  
  render(){
    if(this.props.simpleLink){
      return <a href={this.props.href}>{this.props.children}</a>
    }
  
    return(
      <li>
        <a href={this.props.href}>{this.props.children}</a>
      </li>
    );  
  }
}


export default Links;
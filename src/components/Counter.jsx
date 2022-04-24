import React from "react";

class Counter extends React.Component{
  constructor(props){
    super(props);

    this.state = {counter: 0};
  }

  buttonClick = ()=>{
    this.setState((state)=>{
      return {
      ...state,
      counter: state.counter + 1
    }})
  }

  render(){
    return (
      <div>
        <div>{this.state.counter}</div>
        <button onClick={this.buttonClick}> +1 </button>
      </div>
    )
  }
}
export default Counter;
import React from "react";

class Counter extends React.Component{
  constructor(props){
    super(props);

    this.state = {counter: 0};
  }

  buttonClickPLus = ()=>{
    this.setState((state)=>{
      return {
      ...state,
      counter: state.counter + 1
      }
    })
  }

  buttonClickMinus = ()=>{
    this.setState((state)=>{
      return{
        ...state,
        counter: state.counter - 1
      }
    })
  }

  buttonReset = ()=>{
    this.setState((state)=>{
      return{
        ...state,
        counter: 0
      }
    })
  }

  render(){
    return (
      <div>
        <div>{this.state.counter}</div>
        <button onClick={this.buttonClickPLus}> +1 </button>
        <button onClick={this.buttonClickMinus}> -1 </button>
        <button onClick={this.buttonReset}> Reset </button>
      </div>
    )
  }
}
export default Counter;
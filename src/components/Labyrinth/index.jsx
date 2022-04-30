import React from "react";
import "./Labyrinth.css";

const events = ['яму', 'дерево', 'камни', 'людей', 'собаку'];

function random() {
  let result = Math.floor(Math.random() * events.length);
  return result;
}

class Labyrinth extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      currentEvent: 0,
      clicks: 0,
      route: '',
    }
  }
  
 
  randomEvents1 = () => {
    this.setState((state) =>{
      return{  
        ...state,      
        currentEvent: random(),
        clicks: state.clicks+1,
        route: 'налево',
      }
    })
    console.log(this.state.clicks);
  }

  randomEvents2 = () => {
    this.setState((state) =>{
      return{  
        ...state,      
        currentEvent: random(),
        clicks: state.clicks+1,
        route: 'прямо',
      }
    })
    console.log(this.state.clicks);
  }

  randomEvents3 = () => {
    this.setState((state) =>{
      return{  
        ...state,      
        currentEvent: random(),
        clicks: state.clicks+1,
        route: 'направо',
      }
    })
    console.log(this.state.clicks);
  }

  render(){
    return (
      <div className="labyrinth">
        <div>
          На прошлом шаге вы выбрали пойти {this.state.route}
        </div>
        <div>
          Перед собой вы видите {events[this.state.currentEvent]}
        </div>
        <button onClick={this.randomEvents1}>Пойти налево</button>
        <button onClick={this.randomEvents2}>Пойти прямо</button>
        <button onClick={this.randomEvents3}>Пойти направо</button>
      </div>
    )
  }
}

export default Labyrinth;
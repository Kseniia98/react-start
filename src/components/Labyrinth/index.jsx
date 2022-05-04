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
  
 
  randomEvents = (event) => {

    const value = event.target.dataset.route;

    this.setState((state) =>{
      return{  
        ...state,      
        currentEvent: random(),
        clicks: state.clicks+1,
        route: value,
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
        <button data-route="налево" onClick={this.randomEvents}>Пойти налево</button>
        <button data-route="прямо" onClick={this.randomEvents}>Пойти прямо</button>
        <button data-route="направо" onClick={this.randomEvents}>Пойти направо</button>
      </div>
    )
  }
}

export default Labyrinth;
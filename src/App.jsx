import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import Counter from './components/Counter';
import Profile from './components/Profile';
import Comment from './components/Comment';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      brand: 'MyReact',
      user: {
        mail: 'olegmail@mail.com',
        name: 'Oleg Olegov', 
        age: 24,
        adress: 'street 25',
        image: 'https://www.jamsadr.com/images/neutrals/person-donald-900x1080.jpg',
      }
    }
  };

  render(){

    return (
      <div className="App">
        <Header logoText = {this.state.brand}/>
        <Profile user={this.state.user}/>
        <Home />
        <About />
        <Counter />
        <Comment user={this.state.user}/>
      </div>
    );
  
  }
}


export default App;

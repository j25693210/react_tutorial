import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons:[
      {name: 'Max', age: 29},
      {name: 'Jacky', age: 25},
      {name: 'Sherry', age: 28}
    ]
  }

switchNameHandler = (newName) => {
  // console.log('was clicked!')
  // DON"T DO THIS: this.state.persons[0].name = 'maximilian';
  this.setState({
    persons: [
      {name: newName, age: 29},
      {name: 'Jacky', age: 25},
      {name: 'Sherry', age: 30}
    ]
  })
}

nameChangeHandler = (event) => {
  this.setState({
    persons: [
      {name: 'Max', age: 29},
      {name: event.target.value, age: 25},
      {name: 'Sherry', age: 30}
    ]
  })
}

  render() {
    const style = {
      backgroundcolor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding:'8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <p>This is really working</p>
      <button
        style={style}
        onClick={() => this.switchNameHandler('maximilian!!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
           name={this.state.persons[1].name}
           age={this.state.persons[1].age}
          click= {this.switchNameHandler.bind(this,'Max!')}
          changed = {this.nameChangeHandler}> My Hobbies: racing</Person>
        <Person
          name={this.state.persons[2].name}
           age={this.state.persons[2].age}/>
       </div>
    );
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hi, I\'m a React App'));
  }
}

export default App;

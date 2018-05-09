import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons:[
      {name: 'Max', age: 29},
      {name: 'Jacky', age: 25},
      {name: 'Sherry', age: 28}
    ],
    showPersons: false
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

togglePersonHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

  render() {
    const style = {
      backgroundcolor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding:'8px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map(person =>{
            return <Person
            name={person.name}
            age={person.age}/>
          })}
       </div>

      );
    }

    return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <p>This is really working</p>
      <button
        style={style}
        onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
       </div>
    );
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hi, I\'m a React App'));
  }
}

export default App;

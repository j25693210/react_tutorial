import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons:[
      {id: 'qwe',name: 'Max', age: 29},
      {id: 'asd',name: 'Jacky', age: 25},
      {id: 'zxc', name: 'Sherry', age: 28}
    ],
    showPersons: false
  }

 nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
}

deletePersonHandler = (personIndex) =>{
  // const persons = this.state.persons.slice();
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons:persons})
}

togglePersonHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

  render() {
    const style = {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding:'8px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor:'lightblue',
        color:'black',
      }
    }

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) =>{
            return <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangeHandler(event,person.id)}
          />

          })}
       </div>

      );
    }
const classes=[];
if (this.state.persons.length <=2){
  classes.push('red');
}
if (this.state.persons.length <=1){
  classes.push('bold');
}

    return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
      <p className={classes.join(' ')}>This is really working</p>
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

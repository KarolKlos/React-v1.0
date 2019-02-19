import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { id: 'fefewa', name: 'Max', age: 22 },
      { id: 'fvwefc', name: 'Manu', age: 24},
      { id: '2efcew', name: 'Sztefen', age: 19 }
    ],
    otherState: 'some value',
    showPersons: false
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    };
    //alt dla "const person = Object.assign({}, this.state.persons[personIndex]);"
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHendler = (personIndex) => {
    //const persons = this.state.persons.slice(); copy and return new persons array
    const persons = [...this.state.persons]; //alt for slice()
    persons.splice(personIndex, 1);
    this.setState({persons: persons})

  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHendler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              change={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div>
      );

      style.backgroundColor = 'red';
    }

    const classes = [];
    if(this.state.persons.length <= 2)
      classes.push('red');
    if(this.state.persons.length <= 1)
      classes.push('bold');

    return (
      
        <div className="App">
          <p className={classes.join(' ')}>hello, this is React</p>
          <h1>HIHIHIHIH</h1>
          <button 
            style={style} 
            onClick={this.togglePersonsHandler}>Toggle Persons</button> 
          {persons}  
        </div>
      
    );
  }
}

export default App;





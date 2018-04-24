import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Radium, { StyleRoot } from "radium";

class App extends Component {
  state = {
    persons: [
      {
        id: 1,
        name: "Bhushan",
        age: 24
      },
      {
        id: 2,
        name: "Pavan",
        age: 24
      },
      {
        id: 3,
        name: "Ganesh",
        age: 24
      }
    ],
    showPersons: false
  };

  togglePersonsHandler = () => {
    const showPersonsToggle = this.state.showPersons;
    this.setState({
      showPersons: !showPersonsToggle
    });
  };

  changedNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = personIndex => {
    console.log(personIndex);
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                key={index}
                name={person.name}
                age={person.age}
                changed={event => {
                  this.changedNameHandler(event, person.id);
                }}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black"
      };
    }
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }
    return (
      <StyleRoot>
        <div className="App">
          <h1> This is a React App! </h1>
          <p className={classes.join(" ")}> This is really working. </p>
          <div>
            <button
              style={style}
              onClick={() => {
                this.togglePersonsHandler();
              }}
            >
              Switch Persons
            </button>
            {persons}
          </div>
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);

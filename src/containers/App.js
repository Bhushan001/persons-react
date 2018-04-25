import React, { PureComponent } from "react";
import classes from "./App.css";
import Persons from "./../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import WithClass from "./../hoc/WithClass";
class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
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
    console.log("[App.js] constructor calling");
  }

  componentWillMount() {
    console.log("[App.js] componentWillMount Calling");
  }
  componentDidMount() {
    console.log("[App.js] componentDidMount calling");
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(`[UPDATE App.js] Inside shouldComponentUpdate`, {
  //     props: nextProps,
  //     state: nextState
  //   });
  //   return (
  //     nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons
  //   );
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log(`[UPDATE App.js] Inside componentWillUpdate`, {
      props: nextProps,
      state: nextState
    });
  }
  componentDidUpdate() {
    console.log(`[UPDATE App.js] Inside componentDidUpdate`);
  }

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
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  };

  render() {
    console.log("[App.js] render method calling");
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.changedNameHandler}
        />
      );
    }

    return (
      <WithClass classes={classes.App}>
        <button
          onClick={() => {
            this.setState({ showPersons: true });
          }}
        >
          Show Persons
        </button>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          toggled={this.togglePersonsHandler}
        />
        <div>{persons}</div>
      </WithClass>
    );
  }
}

export default App;

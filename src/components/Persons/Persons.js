import Person from "./Person/Person";
import React, { Component } from "react";

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log(`[Persons.js] constructor is called`, props);
  }

  componentWillMount() {
    console.log("[Persons.js] componentWillMount Calling");
  }
  componentDidMount() {
    console.log("[Persons.js] componentDidMount calling");
  }

  componentWillReceiveProps(nextProps) {
    console.log(
      `[UPDATE Persons.js] Inside componentWillReceiveProps`,
      nextProps
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(`[UPDATE persons.js] Inside shouldComponentUpdate`, {
      props: nextProps,
      state: nextState
    });
    return nextProps.persons !== this.props.persons;
  }

  componentWillUpdate(nextProps, nextState){
    console.log(`[UPDATE persons.js] Inside componentWillUpdate`, {
      props: nextProps,
      state: nextState
    });
  }

  render() {
    console.log("[Persons.js] render method calling");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          key={index}
          name={person.name}
          age={person.age}
          changed={event => {
            this.props.changed(event, person.id);
          }}
        />
      );
    });
  }
}

export default Persons;

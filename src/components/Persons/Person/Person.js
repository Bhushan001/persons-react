import React, { Component } from "react";
import classes from "./Person.css";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log(`[Person.js] constructor is called`, props);
  }

  componentWillMount(){
    console.log("[Person.js] componentWillMount Calling");
  }
  componentDidMount(){
    console.log("[Person.js] componentDidMount calling");

  }

  render() {
    console.log("[Person.js] render method calling");
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          Hi, I am {this.props.name}, My age is {this.props.age}
        </p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;

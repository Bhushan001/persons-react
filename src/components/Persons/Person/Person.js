import React, { Component } from "react";
import classes from "./Person.css";
import WithClass from "./../../../hoc/WithClass";
import PropTypes from "prop-types";
class Person extends Component {
  constructor(props) {
    super(props);
    console.log(`[Person.js] constructor is called`, props);
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log("[Person.js] componentWillMount Calling");
  }
  componentDidMount() {
    console.log("[Person.js] componentDidMount calling");
    if (this.props.position === 0) {
      this.inputElement.current.focus();
    }
  }

  render() {
    console.log("[Person.js] render method calling");
    return (
      <WithClass classes={classes.Person}>
        <p onClick={this.props.click}>
          Hi, I am {this.props.name}, My age is {this.props.age}
        </p>
        <input
          type="text"
          ref={this.inputElement}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </WithClass>
    );
  }
}
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
  position: PropTypes.number
};
export default Person;

import React, { Component } from "react";
import "./Person.css";

class Person extends Component {
  render() {
    return (
      <div className="Person">
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

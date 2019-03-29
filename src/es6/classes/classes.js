import React, { Component } from "react";

export default class Classes extends Component {
  render() {
    class Person {
      constructor(name) {
        this.name = name;
      }

      walk() {
        console.log("walk");
      }
    }

    const person = new Person("Reyhan");
    console.log(person.name);
    return (
      <div>
        <h1>hello world</h1>
      </div>
    );
  }
}

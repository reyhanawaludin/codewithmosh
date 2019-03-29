import React, { Component } from "react";

export default class index extends Component {
  render() {
    class Person {
      constructor(name) {
        this.name = name;
      }

      walk() {
        console.log("walk");
      }
    }

    class Teacher extends Person {
      constructor(name, degree) {
        super(name);
        this.degree = degree;
      }
      teach() {
        console.log("teach");
      }
    }
    const teacher = new Teacher("Mosh", "MSc");

    console.log(teacher);

    return (
      <div>
        <h1>hello world</h1>
      </div>
    );
  }
}

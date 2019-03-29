import React, { Component } from "react";
import { Promoted, Teacher } from "./teacher";

export default class index extends Component {
  render() {
    const teacher = new Teacher("Reyhan", "Msc");
    teacher.teach();
    return <div />;
  }
}

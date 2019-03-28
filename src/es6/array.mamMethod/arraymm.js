import React, { Component } from "react";

export default class ArrayMM extends Component {
  render() {
    const colors = ["red", "green", "blue"];
    const items = colors.map(color => `<li>${color}</li>`);
    console.log(items);
    return (
      <div>
        <h1>hello world</h1>
      </div>
    );
  }
}

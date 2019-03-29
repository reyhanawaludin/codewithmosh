import React, { Component } from "react";

export default class spreadOperator extends Component {
  render() {
    const first = { name: "reyhan" };
    const second = { job: "progammer" };

    const combined = { ...first, ...second, location: "indonesia" };
    console.log(combined);
    return (
      <div>
        <h1>hello world</h1>
      </div>
    );
  }
}

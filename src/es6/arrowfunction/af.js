import React, { Component } from "react";

export default class AF extends Component {
  render() {
    const jobs = [
      { id: 1, isActive: true },
      { id: 2, isActive: true },
      { id: 3, isActive: false }
    ];
    const ordinaryFunction = jobs.filter(function(job) {
      return job.isActive;
    });
    const simpleFunction = jobs.filter(job => job.isActive);
    console.log(simpleFunction);
    return (
      <div>
        <h1>hello world</h1>
      </div>
    );
  }
}

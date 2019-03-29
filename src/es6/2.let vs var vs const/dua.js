import React, { Component } from "react";

export default class dua extends Component {
  render() {
    //var -> function
    //let -> block
    //const -> block
    function rehhann() {
      for (var i = 0; i < 9; i++) {
        console.log(i);
      }
      console.log(i);
    }
    rehhann();
    return <div />;
  }
}

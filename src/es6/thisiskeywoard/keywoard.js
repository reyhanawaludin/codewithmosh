import React, { Component } from 'react'

export default class Keywoard extends Component {
  render() {
      const person={
          name:"rehhann",
          walk(){
              console.log(this);
          }
      };
      person.walk();

      const walk = person.walk();
      console.log(walk);

    return (
      <div>
        <h1>Hello world</h1>
      </div>
    )
  }
}

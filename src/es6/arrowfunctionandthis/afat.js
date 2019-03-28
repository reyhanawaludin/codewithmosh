import React, { Component } from 'react'

export default class Afat extends Component {
  render() {
      const person ={
          talk(){
              var self = this;
              setTimeout(()=>{
                  console.log("this",this)
              },1000)
          }
      }
      person.talk();
    return (
      <div>
        <h1>hello world</h1>
      </div>
    )
  }
}

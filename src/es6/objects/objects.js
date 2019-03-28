import React, { Component } from 'react'

export default class Objects extends Component {
  render() {
      const person = {
          name : 'mosh',
          walk(){},
          talk(){}

      };

      person.talk();
      person.name = '';
      const targetMember = 'name';
      person[targetMember.value] = 'john';
    return (
      <div>
        <h1>hellooo
            
        </h1>
      </div>
    )
  }
}

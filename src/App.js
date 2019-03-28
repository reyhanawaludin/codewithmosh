import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Dua from './2.let vs var vs const/dua'
// import Object from './objects/objects'
// import Keywoard from './thisiskeywoard/keywoard'
// import BindingThis from './bindingthis/bindingthis'
import ArrowFunction from './arrowfunction/af'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Dua/> */}
        {/* <Object/> */}
        {/* <Keywoard/> */}
        {/* <BindingThis/> */}
        <ArrowFunction/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/learning-examples/FirstCompoent';
import SecondComponent from './components/learning-examples/SecondComponent';
import ThirdComponent from './components/learning-examples/ThirdComponent';
import Counter from './components/Counter/Counter';

 
class App extends Component {
  render() {
    return (
      <div className="App">
        My Hello World
        {/* <FirstComponent />
        <SecondComponent />
        <ThirdComponent /> */}
        <Counter></Counter>
      </div>
    );
  }
}








export default App;
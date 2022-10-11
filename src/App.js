import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/learning-examples/FirstCompoent';
import SecondComponent from './components/learning-examples/SecondComponent';
import ThirdComponent from './components/learning-examples/ThirdComponent';
import Counter from './components/Counter/Counter';
import CounterButton from './components/Counter/Counter';
import TodoApp from './components/todo/TodoApp';

 
class App extends Component {
  render() {
    return (
      <div className="counter">
       To-Do app project
       <TodoApp />

       {/* <Counter /> */}
        {/* Learning Examples
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent /> */}
      </div>
    );
  }
}








export default App;
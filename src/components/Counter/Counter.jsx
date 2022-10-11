import React, {Component} from 'react';
import propTypes from 'prop-types';
import './Counter.css';


class Counter extends Component {

  constructor(){
    super(); 

    this.state = { 
      counter : 0,
    }

    this.increment = this.increment.bind(this);
  }

  render() {
    return (
      <div className="App">
         Counting is Fun
        <CounterButton by={1} incrementMethod={this.increment}/>
        <CounterButton by={2} incrementMethod={this.increment}/>
        <CounterButton by={5} incrementMethod={this.increment}/>
        <CounterButton by={10} incrementMethod={this.increment}/>
        <span className="count">{this.state.counter}</span>
      </div>
    );
  }

  increment(by){ 
    console.log(`increment in parent + ${by}`)
    this.setState({
      counter: this.state.counter + by
    });
  
   }

}


class CounterButton extends Component {

// Define initial state in constructor
// state => counter 0

  constructor(){
    super(); // Error 1: common to not include

    this.state = { 
      counter : 0,
      // secondCounter: 100 
    }

    this.increment = this.increment.bind(this);
  }

  render () {
  return (
    <div className="counter">
        <button onClick={this.increment}>+{this.props.by}</button>
        {/* <span className="count"
          // style={style}
        >{this.state.counter}</span> */}
    </div>
  )
}

 increment(){  // update state: counter ++
  // console.log('increment')
  // this.state.counter++;  // Bad practice!
  this.setState({
    counter: this.state.counter + this.props.by,
  });

  this.props.incrementMethod(this.props.by);
 }

}

export default Counter
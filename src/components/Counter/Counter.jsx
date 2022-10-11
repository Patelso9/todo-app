import React, {Component} from 'react';
import propTypes from 'prop-types';
import './Counter.css';


class Counter extends Component {
  render() {
    return (
      <div className="App">
        {/* <FirstComponent />
        <SecondComponent />
        <ThirdComponent /> */}
        <CounterButton by={1}/>
        <CounterButton by={2}/>
        <CounterButton by={5}/>
        <CounterButton by={10}/>
      </div>
    );
  }
}


class CounterButton extends Component {

// Define initial sttate in constructor
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
        <span className="count"
          // style={style}
        >{this.state.counter}</span>
    </div>
  )
}

 increment(){  // update state: counter ++
  // console.log('increment')
  // this.state.counter++;  // Bad practice!
  this.setState({
    counter: this.state.counter + this.props.by,
  });

 }

}

export default Counter
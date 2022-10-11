import React, {Component} from 'react';
import './Counter.css';

class Counter extends Component {

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
    const style = {fontSize : "100px", padding : "30px 50px"}
  return (
    <div className="counter">
        <button onClick={this.increment}>+1</button>
        <span className="count"
          style={style}
        >{this.state.counter}</span>
        {/* <span className="count">{this.state.secondCounter}</span> */}
    </div>
  )
}

 increment(){  // update state: counter ++
  // console.log('increment')
  // this.state.counter++;  // Bad practice!
  this.setState({
    counter: this.state.counter + 1,
    // secondCounter: this.state.secondCounter + 1
  });

 }

}

export default Counter
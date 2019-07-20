import React, {Component} from 'react';
import {counter} from '../store'

export default class Main extends Component{

  increment(){
    counter.value++;
    this.setState({})
  }
  decrement(){
    counter.value--;
    this.setState({})
  }

  render () {
    return (
      <div>
        <h1>Main</h1>
        counter: {counter.value}
        <div>
          <button onClick={this.increment.bind(this)}>increment</button>
          <button onClick={this.decrement.bind(this)}>decrement</button>
        </div>
      </div>

    )
  }

}

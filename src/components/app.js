import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Counter from './counter';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {count : 0}
  }

  setCount = (count) => {
    this.setState({count});
  }

  render() {
    const {count} = this.state;
    const countChange = this.setCount;
    return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/urgent">Urgent</Link>
              </li>
              <li>
                <Link to="/lazy">Lazy</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path='/' render={props => <Counter page={"HOME"} count={count} countChange={countChange}/>}/>
            <Route exact path='/urgent' component={props => <Counter page={"URGENT"} count={count} countChange={countChange}/>}/>
            <Route exact path='/lazy' component={props => <Counter page={"LAZY"} count={count} countChange={countChange}/>}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

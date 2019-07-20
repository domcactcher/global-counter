import React, {Component} from 'react';
import Main from './component/main'
import Lazy from './component/lazy'
import Urgent from './component/urgent'
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component{
  render () {
    return (
      <Router>
        <Link to="/">Home</Link>
        <Link to="/lazy">Lazy</Link>
        <Link to="/urgent">Urgent</Link>
        <div className="App">
          <Route path="/" exact component={Main} />
          <Route path="/lazy" component={Lazy} />
          <Route path="/urgent" component={Urgent} />
        </div>
      </Router>
    )
  }

}

export default App;

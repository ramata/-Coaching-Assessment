import React, { Component } from 'react';
import { Router, Route, Link, HashRouter } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

const Home = () => <h1>Hello from Home!</h1>
const NotFound = () => <h1> Page not found </h1>
const question1 = require(./question1);
const question2 = require(./question2);


class App extends Component {
  render() {
    return (
      <HashRouter>
      <div>
        <Route path='/' component={Home} />
        <Route path='/question1' component={Question1} />
        <Route path='/question2' component={Question2} />
        <Route path='*' component={NotFound} />
        </div>
      </HashRouter>
    );
  }
}


export default App;



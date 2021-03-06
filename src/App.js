import React, { Component } from 'react'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import axios from 'axios'
import Nav from './components/Nav'
import Profile from './components/Profile'
import Welcome from './components/Welcome.jsx'
import Home from './components/Home'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Nav/>
          <Welcome />
          <Route path="/profile" component={Profile}/>
          <Home />
        </div>
      </Router>
    )
  }
}


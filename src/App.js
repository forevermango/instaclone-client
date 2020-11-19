import React, { Component } from 'react'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import axios from 'axios'
import Nav from './components/Nav'
import Profile from './components/Profile'
import Welcome from './components/Welcome.jsx'
import Home from './components/Home'
import CreateFeed from './components/CreateFeed'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }


  render() {
    return (
      <Router>
        <div>
          <Nav/>
          <Switch>
            <div className="container">
              <Route path="/welcome" component={Welcome} />
              <Route path="/profile" component={Profile}/>
              <Route path="/" exact component={Home} />
              <Route path="/create" component={CreateFeed}/>
            </div>
          </Switch>

        </div>
      </Router>
    )
  }
}


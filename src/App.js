import React, { Component } from 'react';
import './App.css';
import FoodContainer from './FoodContainer'
import LoginRegisterForm from './LoginRegisterForm'


export default class App extends Component {
	constructor() {
		super()
		this.state = {
			loggedIn: false,
			loggedInUserUsername: ''
		}
	}

  render() {
    return (
      <div className="App">
        {
          this.state.loggedIn
          ?
          <FoodContainer />
          :
          <LoginRegisterForm />
        }
      </div>
    )
  }
}



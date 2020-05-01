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

  register = (registerInfo) => {
    console.log("register() in app.js is called with the following: ", registerInfo);
  }

  login = (loginInfo) => {
    console.log("login() in app.js is called with the following: ", loginInfo);
  }

  render() {
    return (
      <div className="App">
        {
          this.state.loggedIn
          ?
          <FoodContainer />
          :
          <LoginRegisterForm 
            login={this.login}
            register={this.register}
          />
        }
      </div>
    )
  }
}



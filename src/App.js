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

  register = async (registerInfo) => {
    console.log("register() in app.js is called with the following: ", registerInfo);
    const url = process.env.REACT_APP_API_URL + "/api/v1/farmers/register"
    try {
      const registerResponse = await fetch(url, {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(registerInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log("register response", registerResponse);
      const registerJson = await registerResponse.json()
      console.log("register json", registerJson);
    } catch(err) {
      console.error("error trying to register with API", err);
    }
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

// this is where yo uneed to show nav bar with link to all farmers if NOT logged in
// and if logged in, all the other links


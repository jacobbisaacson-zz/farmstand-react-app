import React, { Component } from 'react';
import './App.css';
import FoodContainer from './FoodContainer'
import LoginRegisterForm from './LoginRegisterForm'
import Header from './Header'


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

      if(registerResponse.status === 201) {
        this.setState({
          loggedIn: true,
          loggedInUserUsername: registerJson.data.username
        })
      }
    } catch(err) {
      console.error("error trying to register with API", err);
    }
  }

  login = async (loginInfo) => {
    console.log("login() in app.js is called with the following: ", loginInfo);
    const url = process.env.REACT_APP_API_URL + "/api/v1/farmers/login"
    try {
      const loginResponse = await fetch(url, {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(loginInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      console.log("login response", loginResponse);
      const loginJson = await loginResponse.json()
      console.log("login json", loginJson);

      if(loginResponse.status === 200) {
        this.setState({
          loggedIn: true,
          loggedInUserUsername: loginJson.data.username
        })
      }
    } catch(err) {
      console.error("error trying to login with API", err);
    }
  }

  logout = async () => {
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/farmers/logout"
      const logoutResponse = await fetch(url, {
        credentials: 'include'
      })
      console.log("logoutResponse", logoutResponse);
      const logoutJson = await logoutResponse.json()
      console.log("logoutJson", logoutJson);

      if(logoutResponse.status === 200) {
        this.setState({
          loggedIn: false,
          loggedInUserUsername: ''
        })
      }
    } catch(err) {
      console.error("error logging out... lol...", err);
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.loggedIn
          ?
          <React.Fragment>
            <Header logout={this.logout} />
            <FoodContainer 
            loggedInUserUsername={this.state.loggedInUserUsername}
            />
          </React.Fragment>
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


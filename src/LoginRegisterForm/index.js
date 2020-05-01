import React, { Component } from 'react'
import { Form, Button, Label } from 'semantic-ui-react'
import '../index.css'

export default class LoginRegisterForm extends Component {
	constructor() {
		super()

		this.state = {
			username: '',
			password: '',
      action: 'Login'
		}
	}

  switchForm = () => {
    if(this.state.action === "Login") {
      this.setState({ action: "Register" })
    } else {
      this.setState({ action: "Login"})
    }
  }


// below -- MAKE IT SO THAT THE ONLY THINGS YOU CAN SEE IF YOU'RE NOT LOGGED IN IS THE 
// REGISTRATION FORM & A LINK SAYING, ALL FARMERS (ALONG WITH THE STUFF ALREADY BELOW!)


  render() {
    return (
      <React.Fragment>
        <h2>{this.state.action} here</h2>
        <Form>
          {
            this.state.action === "Register"
            &&
            <React.Fragment>
              <Label>Username:</Label>
              <Form.Input
                type="text"
                name="username"
                placeholder="Enter Username: "
                value={this.state.username}
              />
            </React.Fragment>
          }
          <Label>Username:</Label>
          <Form.Input
            type="text"
            name="username"
            placeholder="Enter Username: "
            value={this.state.username}
          />
          <Label>Password:</Label>
          <Form.Input
            type="password"
            name="password"
            placeholder="Enter Password: "
            value={this.state.password}
          />
          <Button type="Submit">
            { this.state.action === "Login" ? "Log in" : "Sign up!" }
          </Button>
        </Form>
        {
          this.state.action === "Login"
          ?
          <p>
            Want to Join? Sign up <span className="fake-link" onClick={this.switchForm}>here</span>.
          </p>
          :
          <p>
            Already joined? Log in <span className="fake-link" onClick={this.switchForm}>here</span>.
          </p>
        }
      </React.Fragment>
    )
  }
}






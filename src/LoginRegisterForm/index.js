import React, { Component } from 'react'
import { Form, Button, Label } from 'semantic-ui-react'
import '../index.css'

export default class LoginRegisterForm extends Component {
	constructor() {
		super()

		this.state = {
			name: '',
      username: '',
			password: '',
      action: 'Login'
		}
	}

  switchForm = () => {
    if(this.state.action === "Login") {
      this.setState({ action: "Register" })
    } else {
      this.setState({ action: "Login" })
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(`Attempting to ${this.state.action.toLowerCase()} with the following credentials`, this.state);

    if(this.state.action === "Register") {
      this.props.register(this.state)
    } else {
      this.props.login(this.state)
    }
  }
// ABOVE -- add some validation stuff -- ie
    // Highlight blank fields fields with errors in red
    // show the errors under or next to the field
    // make sure password is certain length, strength, 
    // make sure PW includes certain characters (use RegExp)

// below -- MAKE IT SO THAT THE ONLY THINGS YOU CAN SEE IF YOU'RE NOT LOGGED IN IS THE 
// REGISTRATION FORM & A LINK SAYING, ALL FARMERS (ALONG WITH THE STUFF ALREADY BELOW!)


  render() {
    return (
      <React.Fragment>
        <h2>{this.state.action} here</h2>
        <Form onSubmit={this.handleSubmit}>
          {
            this.state.action === "Register"
            &&
            <React.Fragment>
              <Label>Name:</Label>
              <Form.Input
                type="text"
                name="name"
                placeholder="Enter Name: "
                value={this.state.name}
                onChange={this.handleChange}
              />
            </React.Fragment>
          }
          <Label>Username:</Label>
          <Form.Input
            type="text"
            name="username"
            placeholder="Enter Username: "
            value={this.state.username}
            onChange={this.handleChange}
          />
          <Label>Password:</Label>
          <Form.Input
            type="password"
            name="password"
            placeholder="Enter Password: "
            value={this.state.password}
            onChange={this.handleChange}
          />
          <Button type="Submit">
            { this.state.action === "Login" ? "Log in" : "Sign up" }
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






import React, { Component } from 'react'
import { Form, Button, Label } from 'semantic-ui-react'

export default class LoginRegisterForm extends Component {
	constructor() {
		super()

		this.state = {
			username: '',
			password: ''
		}
	}

  render() {
    return (
      <React.Fragment>
        <Form>
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
          <Button type="Submit">Log In</Button>
        </Form>
      </React.Fragment>
    )
  }
}
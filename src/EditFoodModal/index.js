import React, { Component } from 'react'
import { Form, Button, Label, Segment } from 'semantic-ui-react'

export default class EditFoodModal extends Component {
  constructor(props) {
    super(props)
    console.log("editmodal props", props);
    this.state = {
      name: props.foodToEdit.name,
      price: props.foodToEdit.price,
      farmer: props.foodToEdit.farmer
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.updateFood(this.state)
  }

  render() {
    const linkStyle = {
      cursor: "pointer",
      color: "blue",
      textDecoration: "underline"
    }
    // console.log("this.state in NewFoodForm", this.state);
    // console.log("this is currently logged in user", this.props.loggedInUserUsername);
    // // logs undefined now again
    // console.log(this.state.farmer, "this is this.state.farmer");
    return (
      <Segment>
        <h4>Edit Fruit or Veggie: </h4>
        <p style={linkStyle} onClick={this.props.closeModal}><small>Close Modal</small></p>
        <Form onSubmit={this.handleSubmit}>
          <Label>Edit Name:</Label>
          <Form.Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Label>Edit Price:</Label>
          <Form.Input
            type="number"
            name="price"
            value={this.state.price}
            onChange={this.handleChange}
          />

          <Button type="Submit">Update Food</Button>
        </Form>
      </Segment>
    )
  }
}
import React, { Component } from 'react'
import { Form, Button, Label, Modal, Header } from 'semantic-ui-react'
import '../index.css'

export default class EditFoodModal extends Component {
  constructor(props) {
    super(props)
    console.log("EditFoodModal PROPS", props);
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
    // console.log("this.state in NewFoodForm", this.state);
    // console.log("this is currently logged in user", this.props.loggedInUserUsername);
    // // logs undefined now again
    // console.log(this.state.farmer, "this is this.state.farmer");
    return (
      <Modal open={true} closeIcon={true} onClose={this.props.closeModal}>
        <Header>
          <h3>Edit Fruit or Veggie</h3>
        </Header>
        <Modal.Content>
          <Form onSubmit={this.handleSubmit}>
            <Label>Edit Name:</Label>
            <Form.Input
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Edit Name: "
              onChange={this.handleChange}
            />
            <Label>Edit Price:</Label>
            <Form.Input
              type="number"
              name="price"
              value={this.state.price}
              placeholder="Edit Price: $ "
              onChange={this.handleChange}
            />
            <Modal.Actions>
              <Button type="Submit">Update Food</Button>
            </Modal.Actions>
          </Form>
        </Modal.Content>
      </Modal>
      )
    }
  }

  // <p className="fake-link" onClick={this.props.closeModal}><small>Close Modal</small></p>









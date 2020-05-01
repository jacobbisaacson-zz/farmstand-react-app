import React, { Component } from 'react'
import { Form, Button, Label, Segment } from 'semantic-ui-react'

export default class NewFoodForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: '',
			price: '',
      farmer: this.props.loggedInUserUsername
		}
	}

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      name: '',
      price: ''
      // farmer: ''
    })
    this.props.createFood(this.state)
  }

	render() {
    console.log("this.state in NewFoodForm", this.state);
    console.log("this is currently logged in user", this.props.loggedInUserUsername);
    console.log(this.state.farmer, "this.state.farmer");
		return (
			<Segment>
				<h4>Add Fruit or Veggie: </h4>
				<Form onSubmit={this.handleSubmit}>
					<Label>Name:</Label>
					<Form.Input
						type="text"
						name="name"
						value={this.state.name}
						placeholder="Fruit / Veggie Name: "
            onChange={this.handleChange}
					/>
					<Label>Price:</Label>
					<Form.Input
						type="number"
						name="price"
						value={this.state.price}
						placeholder="Fruit / Veggie Price: $"
            onChange={this.handleChange}
					/>
					<Button type="Submit">Add Food</Button>
				</Form>
			</Segment>
		)
	}
}

          // // <Label>Farmer:</Label>
          // <Form.Input
          //   type="text"
          //   name="farmer"
          //   value={this.state.farmer}
          //   placeholder="Farmer's Name: "
          //   onChange={this.handleChange}
          // />  

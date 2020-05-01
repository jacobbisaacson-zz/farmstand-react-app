import React, { Component } from 'react'
import { Form, Button, Label, Segment } from 'semantic-ui-react'

export default class NewFoodForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: '',
			price: '',
			farmer: ''
		}
	}

	render() {
		return (
			<Segment>
				<h4>Add Fruit or Veggie: </h4>
				<Form>
					<Label>Name:</Label>
					<Form.Input
						type="text"
						name="name"
						value={this.state.name}
						placeholder="Fruit / Veggie Name: "
					/>
					<Label>Price:</Label>
					<Form.Input
						type="number"
						name="price"
						value={this.state.price}
						placeholder="Fruit / Veggie Price: $"
					/>
					<Label>Farmer:</Label>
					<Form.Input
						type="text"
						name="farmer"
						value={this.state.farmer}
						placeholder="Farmer's Name: "
					/>	
					<Button type="Submit">Add Food</Button>
				</Form>
			</Segment>
		)
	}
}
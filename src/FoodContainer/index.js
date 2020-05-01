import React, { Component } from 'react'
import FoodList from '../FoodList'
import NewFoodForm from '../NewFoodForm'

export default class FoodContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foods: []
    }
  }

  componentDidMount() {
    this.getFoods()
  }

  getFoods = async () => {
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/foods/"
      // console.log("will fetch data from (url):", url);
      const foodResponse = await fetch(url, {
        credentials: 'include'
      })
      // console.log("here's the fetch call:", foodResponse);
      const foodsJson = await foodResponse.json()
      // console.log("heres data from getFoods in json", foodsJson);

      this.setState({
        foods: foodsJson.data
      })
    } catch(err) {
      console.error("error retrieving FOOD DATA", err);
    }
  }

  createFood = async (foodToAdd) => {
    console.log("here's food we're adding", foodToAdd);
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/foods/"
      const createFoodResponse = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(foodToAdd)
      })
      console.log("createFoodResponse", createFoodResponse);
      const createFoodJson = await createFoodResponse.json()
      console.log("createFoodJson", createFoodJson);
    } catch(err) {
      console.error("error adding food", err)
    }
  }

	render() {
    console.log("this.state in render in FoodContainer", this.state);
		return(
			<React.Fragment>
        <NewFoodForm createFood={this.createFood}/>
        <FoodList foods={this.state.foods}/>
      </React.Fragment>
		)
	}
}
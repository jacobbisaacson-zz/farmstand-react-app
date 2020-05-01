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
      const foodsResponse = await fetch(url, {
        credentials: 'include'
      })
      // console.log("here's the fetch call:", foodResponse);
      const foodsJson = await foodsResponse.json()
      // console.log("heres data from getFoods in json", foodsJson);

      this.setState({
        foods: foodsJson.data
      })
    } catch(err) {
      console.error("error retrieving FOOD DATA", err);
    }
  }

  deleteFood = async (idOfFoodToDelete) => {
    const url = process.env.REACT_APP_API_URL + "/api/v1/foods/" + idOfFoodToDelete
    try {
      const deleteFoodResponse = await fetch(url, {
        method: 'DELETE',
        credentials: 'include',
      })
      console.log("deleteFoodResponse", deleteFoodResponse);
      const deleteFoodJson = await deleteFoodResponse.json()
      console.log("deleteFoodJson", deleteFoodJson);

      if(deleteFoodResponse.status === 200) {
        this.setState({
          foods: this.state.foods.filter(food => food.id !== idOfFoodToDelete)
        })
      }
    } catch(err) {
      console.error("error DELETING", err)
    }
  }

  createFood = async (foodToAdd, currentUser) => {
    console.log("here's food we're adding", foodToAdd);
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/foods/"
      const createFoodResponse = await fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(foodToAdd)
      })
      console.log("createFoodResponse", createFoodResponse);
      const createFoodJson = await createFoodResponse.json()
      console.log("createFoodJson", createFoodJson);

      if(createFoodResponse.status === 201) {
        this.getFoods()
      }

      // if(createFoodResponse.status === 200) {
      //   this.setState({
      //     foods: [...this.state.foods, createFoodJson.data]
      //   })
      //   this.getFoods()

    } catch(err) {
      console.error("error adding food", err)
    }
  }

	render() {
    console.log("this.state in render in FoodContainer", this.state);
		return(
			<React.Fragment>
        <NewFoodForm 
          createFood={this.createFood}
          loggedInUserUsername={this.props.loggedInUserUsername}
        />
        <FoodList 
          foods={this.state.foods}
          deleteFood={this.deleteFood}
        />
      </React.Fragment>
		)
	}
}












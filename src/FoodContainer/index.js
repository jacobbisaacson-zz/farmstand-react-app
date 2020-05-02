import React, { Component } from 'react'
import FoodList from '../FoodList'
import NewFoodForm from '../NewFoodForm'
import EditFoodModal from '../EditFoodModal'

export default class FoodContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foods: [],
      idOfFoodToEdit: -1
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
        credentials: 'include'
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

  editFood = (idOfFoodToEdit) => {
    console.log("trying to edit food with id: ", idOfFoodToEdit);
    this.setState({
      idOfFoodToEdit: idOfFoodToEdit
    })
  }

  updateFood = async (updatedFoodInfo) => {
    const url = process.env.REACT_APP_API_URL + "/api/v1/foods/" + this.state.idOfFoodToEdit
    try {
      const updateFoodResponse = await fetch(url, {
        method: 'PUT',
        credentials: 'include',
        body: JSON.stringify(updatedFoodInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log("update food response", updateFoodResponse);
      const updateFoodJson = await updateFoodResponse.json()
      console.log("update food json", updateFoodJson);

      if(updateFoodResponse.status === 200) {
        const foods = this.state.foods
        const indexOfFoodBeingUpdated = foods.findIndex(food => food.id === this.state.idOfFoodToEdit)
        foods[indexOfFoodBeingUpdated] = updateFoodJson.data
        this.setState({
          foods: foods,
          idOfFoodToEdit: -1
        })
      }
    } catch(err) {
      console.error("error updatating food", err)
    }
  }

  closeModal = () => {
    this.setState({
      idOfFoodToEdit: -1
    })
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
          editFood={this.editFood}
        />
        { 
          this.state.idOfFoodToEdit !== -1 
          &&
          <EditFoodModal
            key={this.state.idOfFoodToEdit}
            foodToEdit={this.state.foods.find((food) => food.id === this.state.idOfFoodToEdit)}
            updateFood={this.updateFood}
            closeModal={this.closeModal}
          /> 
        }
      </React.Fragment>
		)
	}
}












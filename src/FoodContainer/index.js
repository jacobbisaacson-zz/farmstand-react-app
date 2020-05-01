import React, { Component } from 'react'
import FoodList from '../FoodList'

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

	render() {
    console.log("this.state in render in FoodContainer", this.state);
		return(
			<React.Fragment>
        <FoodList foods={this.state.foods}/>
      </React.Fragment>
		)
	}
}
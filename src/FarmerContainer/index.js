import React, { Component } from 'react'
import FarmerList from '../FarmerList'

export default class FarmerContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			farmers: []
		}
	}

	componentDidMount() {
		this.getFarmers()
	}

	getFarmers = async () => {
		try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/farmers/all"
      const farmersResponse = await fetch(url, {
        method: 'GET'
      })
      // console.log("fetch call for farmers", farmersResponse);
      const farmersJson = await farmersResponse.json()
      console.log("heres data from GET FARMERS in JSON", farmersJson);
      this.setState({
        farmers: farmersJson.data
      })
			
		} catch(err) {
			console.error("error getting farmers", err);
		}
	}

  render() {
    console.log("this.state in farmer container render", this.state.farmers);
    // console.log(".env in render in farmers contaier", process.env);
    return(
      <React.Fragment>
        <h3 className="h2-class"> Farmer List </h3>
          <FarmerList farmers={this.state.farmers}/>
      </React.Fragment>
    )
  }
}




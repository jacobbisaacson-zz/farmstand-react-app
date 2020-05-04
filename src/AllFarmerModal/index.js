import React from 'react'
import { Card } from 'semantic-ui-react'
// import FarmerHeader from './FarmerHeader'


export default function AllFarmersModal(props) {
  console.log("AllFarmersModal PROPS", props);
  const farmers = props.farmers.map(farmer => {
    return(
        <Card key={farmer.id} color={"yellow"}>
          <Card.Content textAlign={"center"}>
            <Card.Header>{farmer.name}</Card.Header>
            <Card.Meta>Name: {farmer.name}</Card.Meta>
            <Card.Description>was grown by farmer</Card.Description>
          </Card.Content>
          <Card.Content textAlign={"center"}></Card.Content>
        </Card>
    )
  })

  return(
    <Card.Group 
      centered={true}
    >
      {farmers}
    </Card.Group>
  )
}


// <Modal open={true} closeIcon={true} onClose={this.props.closeFarmersModal}>
// will need this



  // <p className="fake-link" onClick={this.props.closeModal}><small>Close Modal</small></p>




              // <Button 
              //   basic 
              //   color='red'
              //   onClick={ () => props.deleteFood(food.id) }
              // >
              //   Delete {food.name}
              // </Button>
              // <Button 
              //   basic 
              //   color='green'
              //   onClick={ () => props.editFood(food.id) }
              // >
              //   Edit {food.name}
              // </Button>


  // componentDidMount() {
  //   this.getAllFarmers()
  // }

     // getAllFarmers={this.state.getAllFarmers} in the componenet did mount

  // getAllFarmers = async () => {
  //   try {
  //     const url = process.env.REACT_APP_API_URL + "/api/v1/farmers/all/"
  //     console.log("will fetch farmers data from (url):", url);
  //     const getAllFarmersResponse = await fetch(url)
  //     console.log("here's the fetch call:", getAllFarmersResponse);
  //     const getAllFarmersJson = await getAllFarmersResponse.json()
  //     console.log("heres data from getallfarmers in json", getAllFarmersJson);

  //     this.setState({
  //       getAllFarmers: getAllFarmersJson.data
  //     })
  //   } catch(err) {
  //     console.error("error retrieving Farmers DATA", err);
  //   }
  // }





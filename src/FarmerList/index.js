import React from 'react'
import { Card } from 'semantic-ui-react'

export default function FarmerList(props) {
  console.log("FARMERLIST PROPS", props);
  const farmers = props.farmers.map(farmer => {
    return(
    	<Card 
        link
        key={farmer.id}
        header={farmer.name}
        meta='Farmer'
      />
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


// make it so that EITHER:
  // when the user clicks the All Farmers link in the header, 
  // it renders the cards (group - links) of the farmers (like it shows currently)
  // OR //
  // leave the cards (links) on the login page, and when the user clicks one
  // it renders a NEW CONTAINER CALLED "FarmersListOfFoods" or something
  // that's just that farmers foods in a list

// <span className="fake-link" onClick={this.switchForm}>here</span>

//   switchForm = () => {
//     if(this.state.action === "Login") {
//       this.setState({ action: "Register" })
//     } else {
//       this.setState({ action: "Login" })
//     }
//   }



        // <Card.Content textAlign={"center"}>
        //   <Card.Header>Farmer: {farmer.name}</Card.Header>
        //   <Card.Description><span className="fake-link">( {farmer.name} )</span>
        //     Check out Farmer's Foods
        //   </Card.Description>
        // </Card.Content>
import React from 'react'
import { Card } from 'semantic-ui-react'

export default function FarmerList(props) {
  console.log("farmerlist PROPS", props);

  return(
  	<Card>
      <Card.Content textAlign={"center"}>
      <Card.Header>farmers name</Card.Header>
      <Card.Description>description</Card.Description>
      </Card.Content>
  	</Card>
  )
}


// <Card.Description>{food.name} was grown by {food.farmer}</Card.Description>
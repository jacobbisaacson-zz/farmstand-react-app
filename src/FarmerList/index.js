import React from 'react'
import { Card } from 'semantic-ui-react'

export default function FarmerList(props) {
  console.log("FARMERLIST PROPS", props);
  const farmers = props.farmers.map(farmer => {
    return(
    	<Card key={farmer.id}>
        <Card.Content textAlign={"center"}>
          <Card.Header>Farmer: {farmer.name}</Card.Header>
          <Card.Description>Farmer {farmer.name} sells {farmer.id}...</Card.Description>
        </Card.Content>
    	</Card>
    )
  })

  return(
    <Card.Group centered={true}>{farmers}{}</Card.Group>
  )
}

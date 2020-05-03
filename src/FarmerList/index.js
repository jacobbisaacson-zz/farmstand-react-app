import React from 'react'
import { Card } from 'semantic-ui-react'

export default function FarmerList(props) {
  console.log("FARMERLIST PROPS", props);
  const farmers = props.farmers.map(farmer => {
    return(
    	<Card key={farmer.id}>
        <Card.Content textAlign={"center"}>
          <Card.Header>{farmer.name}</Card.Header>
          <Card.Description>{farmer.name} sells foods...</Card.Description>
        </Card.Content>
    	</Card>
    )
  })

  return(
    <Card.Group centered={true}>{farmers}</Card.Group>
  )
}

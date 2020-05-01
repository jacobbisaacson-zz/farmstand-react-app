import React from 'react'
import { Card, Button } from 'semantic-ui-react'

export default function FoodList(props) {
  console.log("foodlist PROPS", props);
  const foods = props.foods.map(food => {
    return(
      <Card.Group>
        <Card key={food.id}>
          <Card.Content textAlign={"center"}>
            <Card.Header>{food.name}</Card.Header>
            <Card.Meta>{food.price}</Card.Meta>
            <Card.Description>{food.name} was grown by {food.farmer}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui-two-buttons'>
              <Button basic color='green'>Edit</Button>
              <Button basic color='red'>Delete</Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>

    )

  })

	return(
		<Card.Group centered={true}>{foods}</Card.Group>
	)
}
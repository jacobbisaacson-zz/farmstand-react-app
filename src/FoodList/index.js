import React from 'react'
import { Card, Button } from 'semantic-ui-react'

export default function FoodList(props) {
  console.log("FOODLIST PROPS", props);
  const foods = props.foods.map(food => {
    return(
        <Card key={food.id} color={"blue"}>
          <Card.Content textAlign={"center"}>
            <Card.Header>{food.name}</Card.Header>
            <Card.Meta>Price: ${food.price}</Card.Meta>
            <Card.Description>{food.name} was grown by farmer {food.farmer.name}</Card.Description>
          </Card.Content>
          <Card.Content textAlign={"center"}>
              <Button 
                basic 
                color='red'
                onClick={ () => props.deleteFood(food.id) }
              >
                Delete {food.name}
              </Button>
              <Button 
                basic 
                color='green'
                onClick={ () => props.editFood(food.id) }
              >
                Edit {food.name}
              </Button>
          </Card.Content>
        </Card>
    )
  })

	return(
		<Card.Group 
      centered={true}
    >
      {foods}
    </Card.Group>
	)
}

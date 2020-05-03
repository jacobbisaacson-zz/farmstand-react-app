import React from 'react'
import { Card, Button } from 'semantic-ui-react'

export default function FoodList(props) {
  console.log("FOODLIST PROPS", props);
  console.log(" *** PROPS.FOODS BIG AND APARENT *** ", props.foods);
  console.log("PROPS.LOGGEDINUSERNAME!!", props.loggedInUserUsername);

  const farmerFoods = props.foods.filter(food => props.loggedInUserUsername === food.farmer.name)
  console.log(farmerFoods, "tjhis is farmerfoods");
  // if(props.foods.length > 0) {
  //   const testFood = props.foods.filter(food => props.loggedInUserUsername === food.farmer.name)
  //   console.log(testFood, "this is test food (filter)");
  // }

  // console.log("Here's PROPS.FOODS - PUSHED to FARMERFOODS [] --> ", farmerFoods);

    const foods = farmerFoods.map(food => {
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

// <Card.Description>{food.name} was grown by {food.farmer}</Card.Description>
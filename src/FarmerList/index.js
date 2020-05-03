import React from 'react'
import { Card } from 'semantic-ui-react'

export default function FarmerList(props) {
  console.log("FARMERLIST PROPS", props);

  const foods = props.foods
  console.log("foods", foods);

  const farmers = props.farmers.map(farmer => {
    return(
    	<Card key={farmer.id}>
        <Card.Content textAlign={"center"}>
          <Card.Header>Farmer: {farmer.name}</Card.Header>
          <Card.Description>
            Farmer {farmer.name} sells {foods.farmers}...
          </Card.Description>
        </Card.Content>
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

// make this smart
// add foods to state
// add idOfFoodsToAddToFarmers: -1
// const foodsToFarmers = 
// set state -- 
// foods: this.state.foods.filter(food => food.id === idOfFoodsToAddToFarmers)

//       const foodsToFarmers = this.props.foods.filter(food => food.id === food.id)



//   return(
//     <React.Fragment>
//       <Card.Group 
//         centered={true}
//       >
//         {farmers}
//       </Card.Group>
//       <Card.Group 
//         centered={true}
//       >
//         {foods}
//       </Card.Group>
//     </React.Fragment>
//   )
// }

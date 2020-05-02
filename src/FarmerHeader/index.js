import React from 'react'
import '../index.css'

export default function FarmerHeader(props) {
  const farmersHeaderStyle = {
    textAlign: "left",
    padding: "10px",
    backgroundColor: "skyblue",
    borderBottom: '2px solid black',
    margin: "0 auto"
  }
		return(
			<nav style={farmersHeaderStyle}>
        <p>Check out the Farmers:
          <span className="fake-link" onClick={props.allFarmers}> All Farmers</span>
        </p>
      </nav>
		)
	}


      // <React.Fragment>
      //   <AllFarmersModal />
      
      // <nav style={farmersHeaderStyle}>
      //   <p>Check out the Farmers:
      //     <span className="fake-link" onClick={props.GetAllFarmers}> All Farmers</span>
      //   </p>
      // </nav>
      // </React.Fragment>
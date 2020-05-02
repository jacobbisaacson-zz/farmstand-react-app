import React from 'react'
import '../index.css'

export default function Header(props) {
  const headerStyle = {
    textAlign: "right",
    padding: "10px",
    backgroundColor: "skyblue",
    borderBottom: "2px solid black",
    margin: "0 auto"
  }
	return(
		<nav style={headerStyle}>
      <p>Currently Logged In | 
        <span className="fake-link" onClick={props.logout}> (Log out)</span>
			</p>
		</nav>
	)
}

// header style for logout/you're logged in as. AND. for "all farmers", etc.  ON ALIGN L:EFT
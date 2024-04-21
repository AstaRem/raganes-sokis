import * as React from 'react'
import raganesLogo from '../images/raganes_logo200.png'

function Logo(props) {
  const customStyle = {
    width: "150px",
    height:"150px"
  }
  return (
      <a href={props.to}>
        <img src={raganesLogo} alt="Raganės Šokis logo" style={customStyle} />
      </a>
    
  )
}

export default Logo

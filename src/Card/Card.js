import React from 'react'
import "../Card/Card.css"

const Card = ({emoji, heading, detail}) => {
  return (
   <div className="card">
    <img src={emoji} alt="" style={{height: "8rem"}} />
    <span>{heading}</span>
    <span>{detail}</span>
    <button className="c-button">LEARN MORE</button>
   </div>
  )
}

export default Card

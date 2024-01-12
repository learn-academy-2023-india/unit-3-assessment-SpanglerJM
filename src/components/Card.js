import React from 'react'

const Card = ({hand}) => {
  return (
    <div className="handStyles">
      {hand.map((Card, index) => {
        return (
          <div className="CardStyles" key={index}>
            {Card}
          </div>
        )
      })}
    </div>
  )
}

export default Card
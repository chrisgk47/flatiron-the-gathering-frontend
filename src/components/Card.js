import React from 'react'

const Card = ({card}) =>{
    return (
        <div>
            <h1>{card.name}</h1>
            <h3>{card.hp}</h3>
            <h6>{card.rarity}</h6>
        </div>

    )
}

export default Card
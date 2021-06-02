import React from 'react'
import '../Cards.css';

const Card = ({card}) => {
    return (
        <div className="card">
            <h1>{card.name}</h1>
            <img src={card.image} alt={card.name} className="card-avatar"/>
            <ul>
                <li><b>HP:</b> {card.hp}</li>
                <li><b>Ability:</b> {card.ability}</li>
                <li><b>Ability Strength:</b> {card.ability_strength}</li>
                <li><b>Rarity:</b> {card.rarity}</li>
                <li><b>Holographic:</b> {card.holographic}</li>
            </ul>
        </div>
             
    )
}

export default Card
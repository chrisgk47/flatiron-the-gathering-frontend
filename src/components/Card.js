import React from 'react'
import './Cards.css';

const Card = ({card}) => {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-title">
                    {card.name}
                    <div className="card-hp-top">{card.hp}</div>
                </div>
                <img src={card.image} alt={card.name} className="card-avatar"/>
                <div className="card-ability">
                    {card.ability} 
                </div>
                <div className="card-description">
                    A description goes here
                </div>
                <div className="card-ability-strength">{card.ability_strength}</div>
                <div className="card-footer">
                    Rarity: {card.rarity} / Holo: {card.holographic}
                </div>
            </div>
        </div>
             
    )
}

export default Card
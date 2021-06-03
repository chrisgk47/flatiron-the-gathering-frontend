import React from 'react'
import './Cards.css';

const Card = ({card, handleDelete}) => {
    return (
        <div className="card">
            <div className="card-inner">
                
                <div className="card-title" key={card.id}>
                    {card.name}
                    <div className="card-hp-top">HP: {card.hp}</div>
                    <button className='delete-bttn' onClick={() => handleDelete(card)}>
                        X
                    </button>
                </div>
                <div className="image" >
                    <img 
                        src={card.image} 
                        alt={card.name} 
                        className="card-avatar"
                    />
                </div>
                <div className="card-ability">
                    Ability: {card.ability} 
                </div>
                <div className="card-description">
                    {card.description}
                </div>
                <div className="card-ability-strength">Power: {card.ability_strength}</div>
                <div className="card-footer">
                    Rarity: {card.rarity} / Holo: {card.holographic}
                </div>
            </div>
        </div>
             
    )
}

export default Card
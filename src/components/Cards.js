import React, {Component} from 'react'
import Card from './Card'

import './Cards.css';

class Cards extends Component {
    state = {
        display: false,
        cards: []
    }

    handleClick = () => {
        let newBoolean = !this.state.display
        this.setState({
          display: newBoolean
        })
      }
  
    componentDidMount(){
      fetch('http://localhost:3000/cards')
        .then(res => res.json())
        .then((cards) => this.setState({cards}))
    }

    render(){
        return (
            <div className="CardList">
                <h1>Card List</h1>
                {this.state.cards.map((card) => (
                    <Card
                        key={card.id}
                        card={card}
                />
                ))}
            </div>
        )
    }
}

export default Cards;
    

    




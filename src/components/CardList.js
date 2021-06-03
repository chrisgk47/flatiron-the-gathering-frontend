import React, {Component} from 'react'
import Card from './Card'

class CardList extends Component {
    
    render() {
        return(
            <div className="collection-cont">
                <div className="collection">
                    {this.props.cards.map((card) => (
                        <Card
                            key={card.id}
                            card={card}
                            addLikes={this.props.addLikes}
                            // handleClick={this.props.handleClick}
                            deleteCard={this.props.deleteCard}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default CardList;

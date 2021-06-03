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
                            handleClick={this.props.handleClick}
                            handleDelete={this.props.handleDelete}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default CardList;

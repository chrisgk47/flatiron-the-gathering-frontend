import React, {Component} from 'react'
import CollectionCard from './CollectionCard'

import './CollectionCard.css'
class CollectionList extends Component {
    
    render() {
        return(
            <div className="collection-list">
                <div className="collection">
                    {this.props.cards.map((card) => (
                        <CollectionCard
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

export default CollectionList;

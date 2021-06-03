import React, {Component} from 'react'
import CardList from './components/CardList'
import Collection from './Collection'

import './components/Cards.css';

const cardUrl = 'http://localhost:3000/cards'
const collectionsUrl = 'http://localhost:3000/collections'
const headers = {
    Accepts: 'application/json',
    'Content-type': 'application/json'
}



class Home extends Component {
    state = {
        cards: [],
        collection: [],
    }
  
    // componentDidMount(){
    //   fetch(cardUrl)
    //     .then(res => res.json())
    //     .then((cards) => this.setState({cards}))
    // }


    // addToCollection = (card) => {
    //     if(!this.state.collection.includes(card)){
    //         this.setState({
    //             collection: [...this.state.collection, card]
    //         })
    //     }
    // }


    releaseFromCollection = (card) => {
        this.setState({ collection: this.state.collection.filter((c) => c !== card)})
    }

    deleteFromCollection= (card) => {
        this.releaseFromCollection(card)
        fetch(`${collectionsUrl}/${card.id}`, {
            method: 'DELETE',
            headers,
        })
            .then(() => {
                this.setState({collection: this.state.cards.filter((c) => c.id !== card.id)})
            })
            .catch((err) => console.log(err))
    }

    render(){
        return (
            <div className="HomeCont">
                {/* <div className="CardList">
                    <h1><u>Card List</u></h1>
                <CardList
                    cards={this.state.cards}
                    handleClick={this.addToCollection}
                    handleDelete={this.deleteFromCollection}
                />
                </div>
                <div className="CollectionList">
                    <h1><u>Collection List</u></h1>
                    <Collection
                        cards={this.state.collection}
                        handleClick={this.addToCollection}
                        handleDelete={this.deleteFromCollection}
                    />
                </div> */}
            </div>
            
        )
    }
}

export default Home;
    

    




import React, {Component} from 'react';
import About from './components/About'
import Header from './Header'
import CardList from './components/CardList'
import Collection from './Collection'
import CollectionForm from './components/CollectionForm'

import './App.css';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const cardUrl = 'http://localhost:3000/cards'
// const collectionsUrl = 'http://localhost:3000/collections'
// const headers = {
//     Accepts: 'application/json',
//     'Content-type': 'application/json'
// }

class App extends Component {
    state = {
        display: false,
        cards: [],
        collections: [],
    }
  
    componentDidMount(){
      fetch(cardUrl)
        .then(res => res.json())
        .then((cards) => this.setState({cards}))
    }

    // handleClick = (e) => {
    //     let newBoolean = !this.state.display
    //     console.log(e)
    //     this.setState({
    //       display: newBoolean
    //     })
    // }
    releaseCard = (card) => {
        this.setState({cards: this.state.cards.filter((c) => c !== card)})
    }

    addToCollection = (card) => {
        console.log(JSON.stringify(card))
        // card.card_id = card.id
       card.likes = 0
        fetch('http://localhost:3000/cards', {
            method: 'POST',
            headers: {
                'Accepts': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(card),
        })
        .then(res => res.json())
        .then((newCard) => this.setState({cards: [...this.state.cards, newCard]}))
        .catch((err) => console.log(err))
    }
    releaseFromCollection = (card) => {
        this.setState({ collection: this.state.collection.filter((c) => c !== card)})
    }

    deleteCard= (card) => {
        this.releaseCard(card)
        fetch(`${cardUrl}/${card.id}`, {
            method: 'DELETE',
            headers: {
                'Accepts': 'application/json',
                'Content-type': 'application/json'
            },
        })
            .then(() => {
                this.setState({cards: this.state.cards.filter((c) => c.id !== card.id)})
            })
            .catch((err) => console.log(err))
    }

    addLikes = (card) => {
        fetch(`${cardUrl}/${card.id}`, {
            method: 'PATCH',
            headers: {
                'Accepts': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({likes: card.likes + 1 })
        })
            .then(res => res.json())
            .then((json) => this.setState({
                cards: this.state.cards.map((c) => (c.id === card.id ? json : c))
            }))
    }

    render(){
        return (
            <div className="App">
                    <Router>
                    <div className="App-Container">
                            <div className='header-cont'>
                                <header className="header">
                                    <Header />
                                </header>
                            </div>
                            <div className="Sidebar-cont">
                                <nav>
                                    <div className="Sidebar">
                                        <br></br>
                                        <h3>
                                            <Link to="/about">About</Link>
                                        </h3>
                                        <br></br>
                                        <h3>
                                            <Link to="/">Home</Link>
                                        </h3>
                                        <br></br>
                                        <h3>
                                            <Link to="/contributors">Contributors</Link>
                                        </h3>
                                        <br></br>
                                        {/* {this.state.display ? <CollectionForm addToCollection={this.addToCollection}/> : null} */}
                                        <CollectionForm addToCollection={this.addToCollection}/>
                                    </div>
                                </nav>
                            </div>
                            {/* <div className="MainContainer">
                                <Home />
                            </div>  */}
                            <Switch>
                                <Route exact path="/"
                                        render={() => (
                                            <CardList 
                                                cards={this.state.cards}
                                                // incLikes={this.incLikes}
                                                addLikes={this.addLikes}
                                                deleteCard={this.deleteCard}
                                            />
                                        )}>
                                </Route>
                                <Route exact path="/about">
                                    <About />
                                </Route>
                                <Route
                                    exact path='/contributors'
                                    render={() => (
                                        <Collection
                                            cards={this.state.collections}
                                            handleDelete={this.deleteFromCollection}
                                        />
                                    )}
                                >
                                </Route>
                            </Switch>
                    </div>
                </Router>
            </div>
        )   
    }
}
export default App


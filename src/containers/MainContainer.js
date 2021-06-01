import React, { Component } from 'react'

import Card from '../components/Card'
class MainContainer extends Component {


    render() {
        return (
            <div className="main-body">
                <div className="Welcome">
                    <h2>Welcome to the <b>Flatiron The Gathering</b> app!</h2>
                    <p>This app is a <b>Magic The Gathering</b> themed card collection app that allows you to open 'packs' of cards that are randomly generated. A User, once signed in, can save the cards they want in 'My Collection'. The characters of the cards are generated from Flatiron School's _______cohort. The students who have entered the <b>FTG</b> realm will be given abilities as well as their elements. This app was inspired by the GTA V card collection system that has been at the height of its popularity in recent days, as well as various fantasy-based games. So get online and start collecting!</p>
                </div>
                <div className="adasd">
                    {this.props.cards.map((card) => {
                        return <Card key={card.id} card={card} />
                    })}
                </div>
            </div>
        )
    }
}

export default MainContainer;
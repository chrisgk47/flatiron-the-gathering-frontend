import React, {Component} from 'react'
import CollectionList from './components/CollectionList'




class Collection extends Component {
    state = {
        cards: []
    }
    componentDidMount(){
        fetch('http://localhost:3000/collections')
             .then(res => res.json())
           .then((cards) => this.setState({cards})) 

    }
                    
    render() {
        return (
            <div className="collection-container">
                <CollectionList
                    cards={this.state.cards}
                />
            </div>
               

    
        )
    }
}

export default Collection
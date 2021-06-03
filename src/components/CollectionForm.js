import React, { Component } from 'react';

import './CollectionForm.css'
class CollectionForm extends Component {
  state = {
    name: '',
    ability: '',
    ability_strength: '',
    hp: 50,
    rarity: '',
    holographic: '',
    image: '',
    description: ''
  }


  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addToCollection({...this.state})
    this.setState({ 
        name: '',
        ability: '',
        ability_strength: '',
        hp: 50,
        rarity: '',
        holographic: '',
        image: '',
        description: ''
    })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div className="form-container">
        <form className="add-collection-form" onSubmit={this.handleSubmit}>
          <h3>Create a Card!</h3>
          <input 
            type="text" 
            name="name" 
            onChange={this.handleChange}
            placeholder="Enter a name..." 
            className="input-text"/>
          <br/>
          <input 
            type="text" 
            name="ability" 
            onChange={this.handleChange}
            placeholder="Enter a ability name..." 
            className="input-text"/>
          <br/>
          <input 
            type="text" 
            name="ability_strength" 
            onChange={this.handleChange}
            placeholder="Enter a ability_strength..." 
            className="input-text"/>
          <br/>
          <input 
            type="text" 
            name="rarity" 
            onChange={this.handleChange}
            placeholder="Enter a rarity..." 
            className="input-text"/>
          <br/>
          <input 
            type="text" 
            name="holographic" 
            onChange={this.handleChange}
            placeholder="Enter a holographic..." 
            className="input-text"/>
          <br/>
          <input 
          type="text" 
          name="image" 
          onChange={this.handleChange}
          placeholder="Enter an image URL..." 
          className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Card" className="submit"/>
        </form>
      </div>
    );
  }

}

export default CollectionForm;

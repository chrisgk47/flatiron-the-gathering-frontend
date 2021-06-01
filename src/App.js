import React, {Component} from 'react'
import Header from './containers/Header'
import MainContainer from './containers/MainContainer'

import Sidebar from './containers/Sidebar'


import './App.css';



class App extends Component {
  state = {
    display: false,
    cards: []
  }
  componentDidMount(){
    fetch('http://localhost:3000/cards')
      .then(res => res.json())
      .then((cards) => this.setState({cards}))
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  
  
  
  render() {
    return (
      <div className="App">
        <header className="Header-Container">
          <Header cards={this.state.cards} />
        </header>
          <div className="Sidebar-Container">
            <Sidebar cards={this.state.cards}/>
          </div>
          <div className="Mainbody-Container">
            <MainContainer cards={this.state.cards}/>
          </div>
      </div>
    );
  }
}

export default App;

{/* <div className="signin">
  
</div>
<div className="signup">
  <MainContainer>
    {this.state.display ? <UserForm addNewUser={this.addNewUser}/> : null}
    <div className="buttonContainer">
      <button onClick={this.handleClick}> Create an Account </button>
    </div>
  </MainContainer>
</div> */}
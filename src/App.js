import React, {Component} from 'react'
import Header from './containers/Header'
import MainContainer from './containers/MainContainer'
import Sidebar from './containers/Sidebar'
import './App.css';


class App extends Component {

  state = {
    users: []
  }
  
  componentDidMount() {
    fetch('http://127.0.0.1:3000/users')
      .then(res => res.json())
      .then((users) => {
        this.setState({ users })
      })
  }

  render(){
    return (
      <div className="App">
        <header className="Header-Container">
          <Header />
        </header>
        <div className="Sidebar-Container">
          <Sidebar />
        </div>
        <div className="Mainbody-Container">
          <MainContainer users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;

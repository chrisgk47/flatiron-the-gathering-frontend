import React, {Component} from 'react';
import Home from './components/Home'
import About from './components/About'
import Cards from './components/Cards'
import Header from './containers/Header'
import SignupForm from './components/SignupForm'
import axios from 'axios'


import logo from './media/logo.png'
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            user: {}
        }
    }

    handleLogin = (data) => {
        this.setState({
          isLoggedIn: true,
          user: data.user
        })
    }
    handleLogout = () => {
        this.setState({
        isLoggedIn: false,
        user: {}
        })
    }

    componentDidMount() {
        this.loginStatus()
    }

    loginStatus = () => {
        axios.get('http://localhost:3001/logged_in', 
       {withCredentials: true})
        .then(response => {
          if (response.data.logged_in) {
            this.handleLogin(response)
          } else {
            this.handleLogout()
          }
        })
        .catch(error => console.log('api errors:', error))
    }


    render(){
        return (
            <div className="App">
                    <Router>
                    <div className="App-Container">
                            <div className='header-cont'>
                                <header className="header">
                                    <img src={logo} alt='Flatiron The Gathering'/>
                                    <Header />
                                </header>
                            </div>
                            <div className="Sidebar-cont">
                                <nav>
                                    <div className="Sidebar">
                                        <br></br>
                                        <h3>
                                            <Link to="/">Home</Link>
                                        </h3>
                                        <br></br>
                                        <h3>
                                            <Link to="/about">About</Link>
                                        </h3>
                                        <br></br>
                                        <h3>
                                            <Link to="/cards">Cards</Link>
                                        </h3>
                                        <br></br>
                                        <h3>
                                            <Link to="/packs">Packs</Link>
                                        </h3>
                                        <br></br>
                                        <h3>
                                            <Link to="/signup">Signup</Link>
                                        </h3>
                                    </div>
                                </nav>
                            </div>
                            <div className="MainContainer">
                                <Home />
                            </div> 
                            <Switch>
                                <Route path="/about">
                                    <About />
                                </Route>
                                <Route path="/cards">
                                    <Cards />
                                </Route>
                                <Route path="http://localhost:3001/">
                                </Route>
                                {/* <Route path="/packs">
                                    <Packs />
                                </Route> */}
                                <Route path="/signup" >
                                    <SignupForm />
                                </Route>
                            </Switch>
                    </div>
                </Router>
            </div>
        )   
    }
}
export default App

// function goHome() {
//     return (<Home />)
       
// }


// function Cards() {
//     return <h2>Cards</h2>
// }
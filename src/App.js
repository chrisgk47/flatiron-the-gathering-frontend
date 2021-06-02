import React, {Component} from 'react';
import Home from './components/Home'
import About from './components/About'
import Cards from './components/Cards'
import Header from './containers/Header'


import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default class App extends Component{
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
                            <div className="Sidebar">
                                <nav>
                                    <div className="list">
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
                            </Switch>
                    </div>
                </Router>
            </div>
        )   
    }
}

// function goHome() {
//     return (<Home />)
       
// }


// function Cards() {
//     return <h2>Cards</h2>
// }
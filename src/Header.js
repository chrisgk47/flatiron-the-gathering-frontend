import React, {Component} from 'react'
import logo from './media/logo.png'
class Header extends Component {
    render(){
        return(
            <div className="header-cont">
                <header className='header'>
                <img src={logo} alt='Flatiron The Gathering'/>
                    <h1 className="title">Flatiron The Gathering</h1>
                </header>
            </div>
        )
    }
}

export default Header
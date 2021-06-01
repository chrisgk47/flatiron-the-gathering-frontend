import React, {Component} from 'react'
import User from '../components/User'

class MainContainer extends Component {


    render() {
        return (
            <div className="main-body">
                {this.props.users.map((user) => {
                    <User key={user.id} user={user} />
                })}
            </div>
        )
    }
}

export default MainContainer;
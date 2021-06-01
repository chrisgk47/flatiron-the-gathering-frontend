import React from 'react'

const User = ({user}) =>{
    return (
        <div>
            <h1>{user.username}</h1>
            <h3>{user.email}</h3>
            <h6>{user.rank}</h6>
        </div>

    )
}

export default User
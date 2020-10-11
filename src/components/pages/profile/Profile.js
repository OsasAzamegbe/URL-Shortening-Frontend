import React from 'react'
import './Profile.css'
import Form from '../../Form'


const Profile = () => {
    return (
        <div className="profile">
            <div className="profile-container">
                <h1>Welcome, User</h1>
                <Form/>
            </div>            
        </div>
    )
}

export default Profile
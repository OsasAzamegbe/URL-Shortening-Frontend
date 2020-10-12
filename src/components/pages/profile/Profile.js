import React from 'react'
import './Profile.css'
import Form from '../../Form'
import List from '../../List'


const Profile = () => {
    return (
        <div className="profile">
            <div className="profile-container">
                <h1>Welcome, User</h1>
                <Form/>
                <List 
                heading="Url List"
                items={[1,2,3,4]}/>
            </div>            
        </div>
    )
}

export default Profile
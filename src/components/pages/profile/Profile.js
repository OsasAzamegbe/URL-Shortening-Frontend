import React, {useState, useEffect} from 'react'
import './Profile.css'
import Form from '../../Form'
import List from '../../List'


const Profile = ({user}) => {

    const [urls, setUrls] = useState([])

    useEffect(() => {
        
        const getUrls = async () => {
            const loggedInUser = localStorage.getItem("user");
            if (loggedInUser) {

                const foundUser = JSON.parse(loggedInUser);
                const token = foundUser.token
                const url = `http://localhost:5000/api/v1/shorten`
                const response = await fetch(url,{
                    method: "GET",
                    headers: {
                        Authorization: token
                    }
                })

                const data = await response.json()
                console.log(data)
                if (data.urls) setUrls(data.urls)
            }   
        }

        getUrls()

    },[])



    return (
        <div className="profile">
            <div className="profile-container">
                <h1>Welcome, {user.username}</h1>
                <Form/>
                <List 
                heading={"Url List"}
                items={urls}/>
            </div>            
        </div>
    )
}

export default Profile
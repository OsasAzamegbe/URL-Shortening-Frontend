import React, {useState, useEffect} from 'react'
import './Profile.css'
import Form from '../../Form'
import List from '../../List'


const Profile = ({user, alerts, setAlerts}) => {

    const [urls, setUrls] = useState([])
    const [longUrl, setLongUrl] = useState("")


    useEffect(() => {

        const postUrl = async () => {
            const loggedInUser = localStorage.getItem("user");
            if (loggedInUser) {
                const foundUser = JSON.parse(loggedInUser);
                const token = foundUser.token
                const url = `/api/v1/shorten`
                const body = {
                    "url": longUrl
                }
                const response = await fetch(url,{
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: token
                    },
                    body: JSON.stringify(body)
                })

                const data = await response.json()
                setLongUrl("")

                if(response.status === 201){
                    setAlerts({
                        ...alerts,
                        signup: {
                            text: data.message,
                            success: true
                        }
                    })
                } else{
                    setAlerts({
                        ...alerts,
                        signup: {
                            text: data.message,
                            success: false
                        }
                    })
                }
    
                setTimeout(() => {
                    setAlerts({
                        ...alerts,
                        signup: {}
                    })
                }, 4000)

            }   
        }

        
        const getUrls = async () => {
            const loggedInUser = localStorage.getItem("user");
            if (loggedInUser) {

                const foundUser = JSON.parse(loggedInUser);
                const token = foundUser.token
                const url = `/api/v1/shorten`
                const response = await fetch(url,{
                    method: "GET",
                    headers: {
                        Authorization: token
                    }
                })

                const data = await response.json()
                if (data.urls) setUrls(data.urls)
            }   
        }

        if (longUrl){
            postUrl().then(getUrls())
        } else {
            getUrls()
        }
        

    },[longUrl])



    return (
        <div className="profile">
            <div className="profile-container">
                <h1 className="profile-heading">Welcome, {user.username}</h1>
                
                {
                    alerts.signup ?
                    <div className={`alert ${alerts.signup.success ? "alert-success" : null}`}>
                        <p className="alert-text" >{alerts.signup.text}</p>
                    </div>
                    : null
                }

                <Form 
                setLongUrl={setLongUrl} />

                <List 
                heading={"Shortened URLs"}
                items={urls}/>
            </div>            
        </div>
    )
}

export default Profile
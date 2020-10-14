import React from 'react'
import './Home.css'
import Button from '../../Button'


const Home = () => {
    return (
        <div className="home">
            <div className="home-container">
                <h1>Home Page</h1>
                <Button
                children="Sign Up"/>
            </div>
        </div>
    )
}

export default Home
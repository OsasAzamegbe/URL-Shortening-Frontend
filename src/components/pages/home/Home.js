import React from 'react'
import './Home.css'
import HomeSection from '../../HomeSection'


const Home = () => {
    return (
        <div className="home">
            <div className="home-container">
                <HomeSection
                buttonLabel={"Create A Free Account"}
                lightBg={true}
                topLine={"Shorten Links Expeditiously"} 
                lightText={false} 
                lightTextDesc={false} 
                headLine={"Start Today!"} 
                description={"Welcome to Shorten! This is a URL shortnening service for creating short links that are highly available on the fly!"} img={"images/svg-1.svg"} alt={"Home page illustration"} 
                imgStart={false} hideButton={false}
                />
            </div>
        </div>
    )
}

export default Home
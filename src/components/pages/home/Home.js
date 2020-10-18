import React from 'react'
import './Home.css'
import HomeSection from '../../HomeSection'
import {sectionOneObj} from './Data'


const Home = () => {
    return (
        <div className="home">
            <div className="home-container">
                <HomeSection
                {...sectionOneObj}
                />
            </div>
        </div>
    )
}

export default Home
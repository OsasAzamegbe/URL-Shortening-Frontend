import React, {useEffect} from 'react'
import './Logout.css'


const Logout = ({setUser}) => {

    useEffect(() => {
        setUser({})
        localStorage.clear()
    }, [])

    return (
        <div className="logout-container">
            <p className="logout-headline">You Have Been Logged Out!</p>
        </div>
    )
}

export default Logout
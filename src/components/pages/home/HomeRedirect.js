import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'


const HomeRedirect = () => {

    let history = useHistory()
    
    useEffect(() =>{
        history.push("/app")
    }, [history])

    return (
        <div>

        </div>
    )
}

export default HomeRedirect
import React, {useState, useEffect} from 'react';
import { useHistory, useLocation } from 'react-router-dom'

import Button from '../../Button';
import './Login.css';


const Login = ({setUser}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let history = useHistory()
    const location = useLocation()

    useEffect(() => {
        if (location.state && location.state.emailInput && location.state.passwordInput){
            setEmail(location.state.emailInput)
            setPassword(location.state.passwordInput)
        }
    }, [location])

    const profileRedirect = () => {        
        history.push("/app/profile")
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        const url = `http://localhost:5000/api/v1/login`
        const postData = {
            email,
            password
        }

        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = await response.json()
        const user = data.user       

        if(response.status === 200){
            localStorage.setItem('user', JSON.stringify(user))
            setUser(user)
            setEmail("")
            setPassword("")
            profileRedirect()
        }

    }

    return (
        <div>
            <section className='login-subscription'>
                <p className='login-subscription-heading'>
                Login
                </p>
                <div >
                <form onSubmit={submitHandler} className='login-container'>
                    <input
                    onChange={emailHandler}
                    value={email}
                    className='login-input'
                    name='email'
                    type='email'
                    placeholder='Your Email'
                    />
                    <input
                    onChange={passwordHandler}
                    value={password}
                    className='login-input'
                    name='password'
                    type='password'
                    placeholder='Your Password'
                    />
                    <Button buttonStyle='btn--outline' children={"Login"}/>
                </form>
                </div>
            </section>        
        </div>
    )
}

export default Login;
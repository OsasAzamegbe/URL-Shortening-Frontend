import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

import Button from '../../Button';
import './SignUp.css';


const SignUp = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let history = useHistory()

    const loginRedirect = () => {        
        history.push("/app/login", {
            emailInput: email,
            passwordInput: password
        })
    }

    
    const usernameHandler = (e) => {
        setUsername(e.target.value)
        
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        const url = `http://localhost:5000/api/v1/register`
        const postData = {
            username,
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

        // const data = await response.json()
        // console.log(data, response.status)

        if(response.status === 201){
            setUsername("")
            setEmail("")
            setPassword("")
            loginRedirect()
        }

    }

    return (
        <div>
            <section className='sign-up-subscription'>
                <p className='sign-up-subscription-heading'>
                Sign Up
                </p>
                <div >
                <form onSubmit={submitHandler} className='sign-up-container'>
                    <input
                    onChange={usernameHandler}
                    value={username}
                    className='sign-up-input'
                    name='username'
                    type='text'
                    placeholder='Your Username'
                    />
                    <input
                    onChange={emailHandler}
                    value={email}
                    className='sign-up-input'
                    name='email'
                    type='email'
                    placeholder='Your Email'
                    />
                    <input
                    onChange={passwordHandler}
                    value={password}
                    className='sign-up-input'
                    name='password'
                    type='password'
                    placeholder='New Password'
                    />
                    <Button buttonStyle='btn--outline' children={"Sign Up"}/>
                </form>
                </div>
            </section>        
        </div>
    )
}

export default SignUp;
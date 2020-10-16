import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";

import Button from '../../Button';
import './SignUp.css';
import {validate} from '../../../utils/Validate'



const SignUp = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({})
    let history = useHistory()


    const loginRedirect = () => {        
        history.push({
            pathname: "/app/login", 
            state: {
                emailInput: email,
                passwordInput: password
            }
        })
    }

    const errorsAbsent = () => {
        return Object.keys(errors).length === 0
    }


    const validateSignUp = () => {
        const values = {
            username,
            email,
            password
        }

        return validate(values)
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

    const postSignUp = async () => {
        if (errorsAbsent() && username && email && password){
            const url = `http://localhost:5000/api/v1/register`
            const postData = {
                username,
                email,
                password
            }
            
            setUsername("")
            setEmail("")
            setPassword("")

            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(postData),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if(response.status === 201){
                loginRedirect()
            }
        }   
    }

    const submitHandler = (e) => {
        e.preventDefault()
    
        const validated = validateSignUp()
        setErrors(validated)
    }

    useEffect( () => {
        postSignUp()
    }, [errors])

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
                    {errors.username ? <div className="errors">{errors.username}</div> : null}
                    <input
                    onChange={emailHandler}
                    value={email}
                    className='sign-up-input'
                    name='email'
                    placeholder='Your Email'
                    />
                    {errors.email ? <div className="errors">{errors.email}</div> : null}
                    <input
                    onChange={passwordHandler}
                    value={password}
                    className='sign-up-input'
                    name='password'
                    type='password'
                    placeholder='New Password'
                    />
                    {errors.password ? <div className="errors">{errors.password}</div> : null}
                    <Button buttonStyle='btn--outline' children={"Sign Up"}/>
                </form>
                </div>
            </section>        
        </div>
    )
}

export default SignUp;
import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

import Button from '../../Button';
import './SignUp.css';



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

    const errorsPresent = () => {
        return Object.keys(errors).length > 0
    }

    const validate = values => {

        const errors = {};
        if (!values.username) {
            errors.username = '* Required';
        } else if (values.username.length > 20) {
            errors.username = 'Must be 20 characters or less';
        }
    
        if (!values.password) {
            errors.password = '* Required';
        } else if (values.password.length < 8) {
            errors.password = 'Must be longer than 8 characters';
        } else if (values.password.length > 100) {
            errors.password = 'Must be less than 100 characters';
        }
    
        if (!values.email) {
            errors.email = '* Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        } else if (values.email.length > 100) {
            errors.email = 'Must be 100 characters or less';
        }
    
        return errors;
    };


    const validateSignUp = () => {
        const values = {
            username,
            email,
            password
        }

        const validated = validate(values)
        setErrors(validated)

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

        validateSignUp()
        if (!errorsPresent()){
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

            // const data = await response.json()
            // console.log(data, response.status)

            if(response.status === 201){
                loginRedirect()
            }
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
                    {errors.username ? <div>{errors.username}</div> : null}
                    <input
                    onChange={emailHandler}
                    value={email}
                    className='sign-up-input'
                    name='email'
                    type='email'
                    placeholder='Your Email'
                    />
                    {errors.email ? <div>{errors.email}</div> : null}
                    <input
                    onChange={passwordHandler}
                    value={password}
                    className='sign-up-input'
                    name='password'
                    type='password'
                    placeholder='New Password'
                    />
                    {errors.password ? <div>{errors.password}</div> : null}
                    <Button buttonStyle='btn--outline' children={"Sign Up"}/>
                </form>
                </div>
            </section>        
        </div>
    )
}

export default SignUp;
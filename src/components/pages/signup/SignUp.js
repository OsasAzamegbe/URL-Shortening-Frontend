import React from 'react';
import Button from '../../Button';
import './SignUp.css';


const SignUp = () => {
    return (
        <div>
            <section className='sign-up-subscription'>
                <p className='sign-up-subscription-heading'>
                Sign Up
                </p>
                <div >
                <form className='sign-up-container'>
                    <input
                    className='sign-up-input'
                    name='username'
                    type='text'
                    placeholder='Your Username'
                    />
                    <input
                    className='sign-up-input'
                    name='email'
                    type='email'
                    placeholder='Your Email'
                    />
                    <input
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
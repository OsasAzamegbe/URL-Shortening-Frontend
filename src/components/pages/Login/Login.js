import React from 'react';
import Button from '../../Button';
import './Login.css';


const Login = () => {
    return (
        <div>
            <section className='login-subscription'>
                <p className='login-subscription-heading'>
                Login
                </p>
                <div >
                <form className='login-container'>
                    <input
                    className='login-input'
                    name='email'
                    type='email'
                    placeholder='Your Email'
                    />
                    <input
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
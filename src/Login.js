import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/330px-Amazon_logo.svg.png' alt='amazon-logo' />
            </Link>

            <div className='login__container'>
                <h2>Sign-in</h2>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' />

                    <h5>Password</h5>
                    <input type="password" />

                    <button className='submit'>Continue</button>
                </form>

                <p className='disc'>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
            </div>
        </div>
    )
}

export default Login
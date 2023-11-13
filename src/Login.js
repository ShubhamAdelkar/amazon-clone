import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/330px-Amazon_logo.svg.png' alt='logo' />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' />

                    <h5>Password</h5>
                    <input type="password" />

                    <button>Sign In</button>
                </form>

                <p>
                    By creating an account or logging in, you agree to Amazon’s Conditions of Use and Privacy Policy.
                </p>
            </div>
        </div>
    )
}

export default Login
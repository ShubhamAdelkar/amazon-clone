import React from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { useState } from 'react';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(auth => {
            navigate('/');
        })
            .catch(error => alert(error.message))
    };

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            console.log(auth);
            if (auth) {
                navigate('/');
            }
        })
            .catch(error => alert(error.message))
    };

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/330px-Amazon_logo.svg.png' alt='amazon-logo' />
            </Link>

            <div className='login__container'>
                <h2>Sign-in</h2>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} id='email' name='email' />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} id='password' name='password' />

                    <button type='submit' onClick={signIn} className='submit'>Continue</button>
                </form>

                <p className='disc'>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button onClick={register} className='create__account'>Create Account</button>
                <p className='me'>by imbachhu</p>
            </div>
        </div>
    )
}

export default Login
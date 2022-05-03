import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authStart } from '../../actions/auth';
import { useForm } from '../hooks/useForm';

export const LoginScreen = () => {

  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: 'fede@gmail.com',
    password: '123456'
  })

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(authStart(email, password));
  }


    return (
        <div>
            <h3 className='auth__title'>Login</h3>

            <form onSubmit={handleLogin}>
                <input
                  className='auth__input'
                  type="text"
                  placeholder='Email'
                  name='email'
                  autoComplete='off'
                  value={email}
                  onChange={handleInputChange}
                />
                <input 
                  className='auth__input'
                  type="password"
                  placeholder='Password'
                  name='password'
                  autoComplete='off'
                  value={password}
                  onChange={handleInputChange}
                  />
                <button 
                  className='btn btn-primary btn-block'
                  type='sumbit'
                >
                  Login
                </button>
                <div className='auth__social-networks'>
                    <p>Loggin with:</p>
                    <div className="google-btn">
                      <div className="google-icon-wrapper">
                          <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button"/>
                      </div>
                      <p className="btn-text">
                      <b>Sign in with google</b>
                      </p>
                    </div>
                </div>
                <Link 
                  to='/auth/register'
                  className='link'
                >
                  Create a new account
                </Link>
            </form>
        </div>
    )
}

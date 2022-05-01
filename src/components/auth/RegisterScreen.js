import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
  return (
    <div>
    <h3 className='auth__title'>Register</h3>

    <form>
        <input
          className='auth__input'
          type="text"
          placeholder='Name'
          name='name'
          autoComplete='off'
        />
        <input
          className='auth__input'
          type='email'
          placeholder='Email'
          name='email'
          autoComplete='off'
        />
        <input 
          className='auth__input'
          type="password"
          placeholder='Password'
          name='password'
          autoComplete='off'
          />
        <input
          className='auth__input'
          type="text"
          placeholder='Confirm Password'
          name='password-confirm'
          autoComplete='off'
        />
        <button 
          className='btn btn-primary btn-block'
          type='sumbit'
        >
          Register
        </button>
        <Link 
          to='/auth/login'
          className='link'
        >
          Already register?
        </Link>
    </form>
</div>
  )
}

import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { setError, removeError } from '../../actions/ui';
import { registerStart } from '../../actions/auth';

export const RegisterScreen = () => {
  
  const dispatch  = useDispatch();
  const { msgError } = useSelector(state => state.ui);

  const [values, handleInputChange] = useForm({
    name: 'Federico',
    email: 'fegv.2@gmail.com',
    password: 'federicog22',
    passwordConfirmation: 'federicog22'
  })

  const {name, email, password, passwordConfirmation} = values;

  const handleRegister = (e) => {
    e.preventDefault();
    
    if(isFormValid()) {
      dispatch(registerStart(name, email, password));
    }
  }

  const isFormValid = () => {
    
    if(name.trim().length === 0){
      dispatch(setError('name error'));
      return false;
    } else if(!validator.isEmail(email)){
      dispatch(setError('email error'));
      return false;
    } else if(password !== passwordConfirmation || password.length < 6){
      dispatch(setError('password error'));
      return false;
    }
    
    dispatch(removeError());
    return true;
  }

  return (
    <div>
    <h3 className='auth__title'>Register</h3>

    {
      msgError && <div className='auth__alert-error'>{msgError}</div>
    }

    <form onSubmit={handleRegister}>
        <input
          className='auth__input'
          type="text"
          placeholder='Name'
          name='name'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        />
        <input
          className='auth__input'
          type='email'
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
        <input
          className='auth__input'
          type="password"
          placeholder='Confirm Password'
          name='passwordConfirmation'
          value={passwordConfirmation}
          autoComplete='off'
          onChange={handleInputChange}
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

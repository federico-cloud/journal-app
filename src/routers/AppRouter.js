import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';

export const AppRouter = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth,({uid, displayName}) => {
      if(uid){
        dispatch(login(uid, displayName));
      }
    });
  }, [dispatch])
  

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/auth/*' element={<AuthRouter/>} />
                <Route path='/*' element={<JournalScreen/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

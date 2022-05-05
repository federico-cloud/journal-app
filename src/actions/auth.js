import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { auth, googleAuthProvider } from '../firebase/firebase';
import { types } from '../types/types'
import { finishLoading, startLoading } from './ui';

export const authStart = (email, password) => {
    return (dispatch) => {
        dispatch(startLoading());
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(login(user.uid, user.displayName));
                dispatch(finishLoading())
            })
            .catch(err => {
                console.log(err);
                dispatch(finishLoading());
            });
    }
}

export const authStartGoogle = () =>{
    return (dispatch) =>{
        signInWithPopup(auth, googleAuthProvider)
            .then( ({user}) => {
                dispatch(login(user.uid, user.displayName));
        })
        .catch(err => {
            console.log(err);
        });
    }
}

export const registerStart = (name, email, password) => {
    return (dispatch) => { 
        createUserWithEmailAndPassword(auth, email, password)
            .then( async({user}) => {
                await updateProfile(user, {displayName: name});
                dispatch(login(user.uid, user.displayName));
            })
            .catch( error => {
                console.log(error);
            })
    }
}

export const login = (uid, name) => ({
    type: types.login,
    payload: {
        uid,
        name
    }
})
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { auth, googleAuthProvider } from '../firebase/firebase';
import { types } from '../types/types'

export const authStart = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(email, password));
        }, 3000);
    }
}

export const authStartGoogle = () =>{
    return (dispatch) =>{
        signInWithPopup(auth, googleAuthProvider)
            .then( ({user}) => {
                dispatch(login(user.uid, user.displayName));
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
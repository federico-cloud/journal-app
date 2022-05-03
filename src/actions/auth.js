import { getAuth, signInWithPopup } from 'firebase/auth';
import { googleAuthProvider } from '../firebase/firebase';
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
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
            .then( ({user}) => {
                dispatch(login(user.uid, user.displayName));
        });
    }
}

export const login = (uid, name) => ({
    type: types.login,
    payload: {
        uid,
        name
    }
})
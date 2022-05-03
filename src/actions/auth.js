import { types } from '../types/types'

export const authStart = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(email, password));
        }, 3000);
    }
};

export const login = (uid, name) => ({
    type: types.login,
    payload: {
        uid,
        name
    }
})
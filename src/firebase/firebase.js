import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDzSeVQdxFVmX1YjNUwlM0wdHY2ZlxdK8k",
    authDomain: "react-app-curso-e9106.firebaseapp.com",
    projectId: "react-app-curso-e9106",
    storageBucket: "react-app-curso-e9106.appspot.com",
    messagingSenderId: "184912947212",
    appId: "1:184912947212:web:6682aa8bb5c044092de629"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

export {
    app,
    auth,
    googleAuthProvider
}





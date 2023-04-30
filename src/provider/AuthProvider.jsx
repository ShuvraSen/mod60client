import React, { createContext, useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext=createContext(null)
const auth = getAuth(app);

// const user={display:"sagor"}
const user=null;

const createUser=(email,password)=>{
   return createUserWithEmailAndPassword(auth, email, password);
}

const signInUser=(email,password)=>{
    return  signInWithEmailAndPassword(auth, email, password)
}

const userSignOut=()=>{
    return signOut(auth)
}







const authInfo={
    user,
    createUser,
    signInUser,
}

const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={authInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
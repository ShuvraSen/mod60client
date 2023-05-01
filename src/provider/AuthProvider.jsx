import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext=createContext(null)
const auth = getAuth(app);





// const createUser=(email,password)=>{
//    return createUserWithEmailAndPassword(auth, email, password);
// }

// const signInUser=(email,password)=>{
//     return  signInWithEmailAndPassword(auth, email, password)
// }

// const userSignOut=()=>{
//     return signOut(auth)
// }



// useEffect(()=>{
//     const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
//        console.log(currentUser,'this is currentuser');
//        setUser(currentUser)

//       });
//       return ()=>{
//        unSubscribe();
//       }
// },[])



// const authInfo={
 
//     createUser,
//     signInUser,
//     userSignOut,
//     user,
// }

const AuthProvider = ({children}) => {


    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)



    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
     }
     
     const signInUser=(email,password)=>{
        setLoading(true)
         return  signInWithEmailAndPassword(auth, email, password)
     }
     
     const userSignOut=()=>{
        setLoading(true)
         return signOut(auth)
     }
     
     
     
     useEffect(()=>{
         const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser,'this is currentuser');
            setUser(currentUser);
            setLoading(false)
     
           });
           return ()=>{
            unSubscribe();
           }
     },[])
     
     
     
     const authInfo={
      
         createUser,
         signInUser,
         userSignOut,
         user,
         loading,
     }
    return (
        <AuthContext.Provider value={authInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
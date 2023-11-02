import React, { useRef, useState } from 'react';
import { validateForm} from '../utils/validate'
import Header from './header';
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { NETFLIX_BG_IMG } from '../utils/constants';
import PROFILE_IMG from '../assets/netflix-yellow image.jpeg'
 const Login = () => {
    const [isSignIn ,setIsSignIn] = useState(true);
    const [errorMessage , setErrorMessage] = useState('');
    const dispatch = useDispatch();

    const name =useRef(null);
    const email =useRef(null);
    const password =useRef(null);
    const handleToggle =()=>{
        setIsSignIn(!isSignIn);
    }
    const handleSubmitForm =()=>{
      const validate=  validateForm(email?.current?.value, password.current.value);
   setErrorMessage(validate)
      if(errorMessage) return;
      if(!isSignIn){
        createUserWithEmailAndPassword(auth, email?.current?.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PROFILE_IMG
          }).then(() => {

          dispatch(addUser({
            uid:auth.currentUser.uid,
            displayName:auth.currentUser.displayName,
            photoURL:auth.currentUser.photoURL,
            email:auth.currentUser.email
          }))
          }).catch((error) => {
            const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode +' '+ errorMessage);
          });
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode +' '+ errorMessage);
          // ..
        });
      }else{
        signInWithEmailAndPassword(auth, email?.current?.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +' '+ errorMessage);
  });

      }

    }
  return (
    <div>
        <Header/>
<div className="absolute">  
<img src={NETFLIX_BG_IMG}/>

</div>
        
       
    <form onSubmit={(e)=> e.preventDefault()} className='absolute  bg-black p-12 mt-24 w-3/12 mx-auto left-0 right-0 text-white bg-opacity-80'>
        <div className='text-3xl px-2 py-4 text-bold'> {isSignIn ? 'Sign In':'Sign Up'}</div>
        {!isSignIn && 
        <input type="text" ref={name}  placeholder='Full Name' className='py-3 m-2 w-full px-2 bg-gray-300 rounded-md '  />
        }
        <input type="text"  ref={email} placeholder='Email Address' className='py-3 m-2 w-full px-2 bg-gray-300 rounded-md '  />
        <input type="password" ref={password} placeholder='Password' className='py-3 m-2 w-full px-2  bg-gray-300 rounded-md' />
        <button className='p-4 my-3 mx-2 bg-red-700 w-full  text-lg rounded-md' onClick={handleSubmitForm}>{isSignIn ? 'Sign In':'Sign Up'}</button>
        <p className='text-red-500 py-2'>{errorMessage ? errorMessage :''}</p>
        <p className='text-md cursor-pointer' onClick={handleToggle}>  {isSignIn ? 'New to Netflix ? Sign Up':'Already Registed ? Sign In Now'}</p>
    </form>
       
    </div>
  )         
}

export default Login
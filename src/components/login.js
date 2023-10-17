import React, { useRef, useState } from 'react';
import { validateForm} from '../utils/validate'
import Header from './header';
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
const Login = () => {
    const [isSignIn ,setIsSignIn] = useState(true);
    const [errorMessage , setErrorMessage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const name =useRef(null);
    const email =useRef(null);
    const password =useRef(null);
    const handleToggle =()=>{
        setIsSignIn(!isSignIn);
    }
    const handleSubmitForm =()=>{
        // console.log(email?.current?.value, password.current.value)
      const validate=  validateForm(email?.current?.value, password.current.value);
   setErrorMessage(validate)
      if(errorMessage) return;
      if(!isSignIn){
        createUserWithEmailAndPassword(auth, email?.current?.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user)
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://media.licdn.com/dms/image/C4D03AQGmUvSSYd_E1w/profile-displayphoto-shrink_200_200/0/1661763775986?e=1703116800&v=beta&t=Jo5p1OxcB-72Pc2-rTVC15HeTit3qkyRnA5flBv2JX8"
          }).then(() => {
          navigate("/browse");
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
        console.log('hi')
        signInWithEmailAndPassword(auth, email?.current?.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    navigate("/browse")

    console.log(user , 'helloooo')
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
<img src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>

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
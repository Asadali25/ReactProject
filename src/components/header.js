import React from 'react';
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store)=> store.user);
const handleSignOut =()=>{
  signOut(auth).then(() => {
    navigate('/');
    // Sign-out successful.
  }).catch((error) => {
    navigate('/error')
    // An error happened.
  });
  
}
  console.log('urllll', user?.photoURL )
  return (

       

     <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
     <img className="w-44 mx-auto md:mx-0" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
   {user && <div className='flex'>
      <img   className ="px-2 h-12 w-14" src={user?.photoURL}/>
      <button className=' my-auto font-bold text-white rounded-md w-24' onClick={handleSignOut} >Sign Out</button>
    </div>}
   </div>
  )
}

export default Header
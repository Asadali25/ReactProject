import React, { useEffect } from 'react';
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {  onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptBtn } from '../utils/searchGptSlice';
import { addPreferedLan } from '../utils/configSlice';
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isGPTSearch = useSelector((store)=>store.gpt.showGptBtn)
  const user = useSelector((store)=> store.user);
  const toggleGPTSerach =()=>{
    dispatch(toggleGptBtn());
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged  (auth, (user) => {
      if (user) {
        
        const {uid , email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName, photoURL:photoURL}));
        navigate("/browse");
       
      } else {
        dispatch(removeUser());
        navigate("/");

      }
      return ()=> unsubscribe;
    });
    

  },[])
const handleLanguage =(e)=>{
  dispatch(addPreferedLan(e.target.value))
}

const handleSignOut =()=>{
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
  
}
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
     <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
   {user && <div className='flex'>
    
      <img   className ="px-2 h-12 w-14 my-1" src={user?.photoURL}/>
     {isGPTSearch && <select className='my-auto px-4 py-1 ml-2 bg-red-700 text-white  ' onChange={handleLanguage} >
        {SUPPORTED_LANGUAGES?.map((ln)=>(
          <option key={ln.idendifier} className='bg-black text-white mt-2 py-4' > {ln.name}</option>
        ))}
      </select>}
      <button className='px-4 mx-4 py-1 bg-red-700 text-white rounded-md my-auto'  onClick={toggleGPTSerach}> {isGPTSearch ? 'Home Page' : 'GPT Search'}</button>
      <button className=' my-auto font-bold text-white rounded-md w-24' onClick={handleSignOut} >Sign Out</button>
    </div>}
   </div>
  )
}

export default Header
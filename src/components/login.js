import React, { useState } from 'react'
import Header from './header'
const Login = () => {
    const [isSignIn ,setIsSignIn] = useState(true);
    const handleToggle =()=>{
        setIsSignIn(!isSignIn);
    }
  return (
    <div>
        <Header/>
<div className="absolute">  
<img src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>

</div>
        
       
    <form className='absolute  bg-black p-12 mt-24 w-3/12 mx-auto left-0 right-0 text-white bg-opacity-80'>
        <div className='text-3xl px-2 py-4 text-bold'> {isSignIn ? 'Sign In':'Sign Up'}</div>
        {!isSignIn && 
        <input type="text"  placeholder='Full Name' className='py-3 m-2 w-full px-2 bg-gray-300 rounded-md '  />
        }
        <input type="text"  placeholder='Email Address' className='py-3 m-2 w-full px-2 bg-gray-300 rounded-md '  />
        <input type="password"  placeholder='Password' className='py-3 m-2 w-full px-2  bg-gray-300 rounded-md' />
        <button className='p-4 my-3 mx-2 bg-red-700 w-full  text-lg rounded-md'>{isSignIn ? 'Sign In':'Sign Up'}</button>
        <p className='text-md cursor-pointer' onClick={handleToggle}>  {isSignIn ? 'New to Netflix ? Sign Up':'Already Registed ?Sign In Now'}</p>
    </form>
       
    </div>
  )         
}

export default Login
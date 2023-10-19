import React from 'react'
import ApiSearchBar from './ApiSearchBar'
import { NETFLIX_BG_IMG } from '../utils/constants'

const ApiSearch = () => {
  return (
    <div>
         <div className="fixed -z-10">
        <img className="h-screen  w-screen object-cover" src={NETFLIX_BG_IMG} alt="logo" />
      </div>
        <div className='pt-[5%] flex justify-center' >
        <ApiSearchBar />
    </div>
    </div>
    
  )
}

export default ApiSearch
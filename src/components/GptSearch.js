import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSuggestions from './GptSuggestions'
import { NETFLIX_BG_IMG } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
         <div className="fixed -z-10">
        <img className="h-screen  w-screen object-cover" src={NETFLIX_BG_IMG} alt="logo" />
      </div>
        {/* <img className="-z-10 absolute w-screen h-screen object-cover" src={NETFLIX_BG_IMG} alt="logo" /> */}
        <div className='pt-[5%] flex justify-center' >
        <GptSearchBar />
        {/* <GptSuggestions /> */}
    </div>
    </div>
    
  )
}

export default GptSearch
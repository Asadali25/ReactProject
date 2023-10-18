import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSuggestions from './GptSuggestions'
import { NETFLIX_BG_IMG } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
        <img className="-z-10 absolute" src={NETFLIX_BG_IMG} alt="logo" />
        <div className='pt-[10%] flex justify-center'>
        <GptSearchBar />
        <GptSuggestions />
    </div>
    </>
    
  )
}

export default GptSearch
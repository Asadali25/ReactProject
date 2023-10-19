import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { lan } from '../utils/languageConstants';
import { API_OPTIONS } from '../utils/constants';
import { addMoviesByPerson, clearMoviesByPerson } from '../utils/movieSlice';
import GptSuggestions from './GptSuggestions';

const GptSearchBar = () => {
  const [inputvalue ,setInputVal] = useState('')
  const dispatch = useDispatch()
    const preferedLan = useSelector((store)=> store.config.preferedLan);

    const handleGptSearch =async ()=>{
      const personTextRef= inputvalue;
        const data = await fetch(`https://api.themoviedb.org/3/search/person?query=${personTextRef}&include_adult=false&page=1`,
        API_OPTIONS
        );
        const json = await data.json();
        dispatch(addMoviesByPerson(json?.results))
    
      
    }

    const handleClear =()=>{
      setInputVal('');
       dispatch(clearMoviesByPerson());
    }
  return (
    <div className='w-1/2  bg-black text-white bg-opacity-60 rounded-md shadow-md' >
        <form className=' rounded-md text-red-700 grid grid-cols-12' onSubmit={(e)=> e.preventDefault()} >
            <input 
            value={inputvalue}
            type='text'
            placeholder={lan[preferedLan].gptInputPlaceholder}
            className='grid col-span-9 p-3 mx-4 my-3'
            onChange={(e)=> setInputVal(e?.target?.value)}
            />
            {inputvalue &&<div className='absolute pt-6 ml-[34%] cursor-pointer' onClick={handleClear}> ✖️ </div>}
            
            <button className='bg-red-700 text-white  p-3 grid col-span-3 my-auto mx-2 rounded-md  text-lg hover:bg-red-800' 
            onClick={handleGptSearch}
            > 
            {lan[preferedLan].search}</button>
            
        </form>
        <GptSuggestions />
        
       
    </div>
  )
}

export default GptSearchBar